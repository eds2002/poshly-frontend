import {useContext, useEffect } from 'react';
import { ItemsContext } from '../../context/creditcards';
import { UserContext } from '../../context/signedUser';
import { TabContext } from '../../context/currentTab';
import CreditCards from '../../components/CreditCards'
import UserProfile from '../../components/UserProfile'
import AccountsList from '../../components/AccountsList'
import Transactions from '../../components/Transactions'
import { verify, decode } from 'jsonwebtoken';
import { getUserItems } from '../../function/getUserItems';
import { getItemInfo } from '../../function/getItemInfo';
import { getAccountLiabilities } from '../../function/getAccountLiabilities';
import Settings from '../../components/Settings';
import Overview from '../../components/Overview';
import { getAccountTransactions } from '../../function/getAccountTransactions';
import { verifyToken } from '../../function/verifyToken';
import { ThemeContext } from '../../context/themePreference';

export default function Home({jwtDecodedUser, userAccounts,transactionsSort,cookies}) {
  console.log(jwtDecodedUser,userAccounts,transactionsSort,cookies)
  const {setSignedUser} = useContext(UserContext)
  const {tab} = useContext(TabContext)
  const {theme} = useContext(ThemeContext)
  const {bankAccounts,setBankAccounts} = useContext(ItemsContext)
  setSignedUser(jwtDecodedUser)
  useEffect(()=>{
    setBankAccounts(userAccounts)
  },[])
  return (
    <main>
      <section className = {`w-full h-screen mx-auto overflow-hidden ${theme === 'dark' ? 'bg-neutral-900' : 'bg-white'}`}>
        <div className = "grid w-full h-full grid-cols-6">
            <div className = {`flex flex-col justify-between w-full h-full p-2 rounded-tr-xl ${theme === 'dark' ? 'bg-neutral-800/50' : 'bg-white'} rounded-br-xl sm:p-4`}>
                <h1 className = "w-full max-w-xs mt-10 ml-auto text-3xl font-semibold text-center text-white ">
                  <span className = {`hidden lg:block ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>Poshly</span>
                  <span className={`block lg:hidden ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>M</span>
                </h1>
                {/* <UserProfile/>
                <AccountsList/> */}
            </div>
          <div className = "relative w-full h-full col-span-5 bg-neutral-900 rounded-tl-3xl rounded-bl-3xl removeScrollbar">
            <div className = "relative h-full p-10">
              {/* <Overview/>
              <CreditCards/>
              <Transactions/>
              <Settings/> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export const getServerSideProps = async (context)=>{
  // verifyToken()
  // return{
  //   props:{}
  // }
  try{
    const cookies = context.req.headers.cookie;
    const userJWT = cookies.slice(5)
    const validCookie = await fetch(`${process.env.DOMAIN}/cookie/verify`,{
      method:"GET",
      headers: {
        'Content-Type': 'application/json'
      },
    }) 
    // console.log(cookies,userJWT,process.env.ACCESS_TOKEN_SECRET)
    // if(verify(userJWT,process.env.ACCESS_TOKEN_SECRET)){
      const userAccounts = await getUserItems(decode(userJWT).userId)
      const userAccountsInfo = await getItemInfo(userAccounts)
      const accountsLiabilities = await getAccountLiabilities(userAccounts)
      // const accountTransactions = await getAccountTransactions(userAccounts)
      // TODO, format items, bankaccounts, and bank account liabilities into one object
      // NOTE, if theres an easier way of doing this pls redo
      let formatAccounts = []

      // TODO, add to formatAccounts arr.
      userAccountsInfo.forEach((userAccount)=>{
        formatAccounts.push(userAccount)
      })

      // TODO, loop accountsLiabilities
      accountsLiabilities.forEach((accountLiability)=>{
        if(accountLiability.accounts){
          // TODO, loop through format accounts, and check if theres a match
          formatAccounts.forEach((account,formatAccountIndex)=>{
            accountLiability.liabilities?.credit?.forEach((accLiability)=>{
              // TODO, if theres a match between account ids, get the position number
              const pos = account.accounts?.findIndex(account=> account.account_id === accLiability.account_id)
              if(pos === undefined){
                return
              }

              // TODO, set new found information into array, positions formataccoutns using the formataccount index, and 
              // the accounts with  the new found position
              formatAccounts[formatAccountIndex].accounts[pos] = {...formatAccounts[formatAccountIndex].accounts[pos], accLiability } 
            })
          })
        }
      })

      

      return{
        props:{jwtDecodedUser: decode(userJWT), userAccounts: formatAccounts || null, cookies:validCookie}
      }
    // }
    throw error
  }catch(e){
    console.log("please work man",e)
    return {
      // redirect: {
      //   permanent: false,
      //   destination: "/"
      // }
      props:{}
    }
  }
}



import { useEffect, useState, useContext } from 'react'
import { usePlaidLink } from "react-plaid-link";
import { ItemsContext } from '../context/creditcards';
import { UserContext } from '../context/signedUser';
import { PlusIcon } from '@heroicons/react/solid';
import { CreateLinkToken } from '../function/createLink';
import { getAccountLiabilities } from '../function/getAccountLiabilities';
import { getItemInfo } from '../function/getItemInfo';
const PlaidButton = ({text, customCSS, removeOldItem}) => {
  const {signedUser} = useContext(UserContext)
  const [linkToken, setLinkToken] = useState(null)
  const {item,setItem, bankAccounts, setBankAccounts} = useContext(ItemsContext)
  const domain = process.env.NEXT_PUBLIC_DOMAIN

  useEffect(()=>{
    let mounted = true;
    CreateLinkToken()
    if(mounted){
      setLinkToken(window.localStorage.getItem('link_token'))
    }
    console.log('infinitelooptest')
    return(()=>{
      mounted = false
    })
  },[])


  const openPlaid = async () =>{
    if(removeOldItem){
      const deleteItemResponse = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/account/delete-item`,{
        method:"DELETE",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({id:removeOldItem})
      })

      const {code,error} = await deleteItemResponse.json()
      switch(code){
        case 200:
           open()
           break;
      }
      return
    }
    open()
  }

  const { open, ready } = usePlaidLink({
    token:linkToken,
    onSuccess: (public_token, metadata)=>{
      // TODO, logic for successfully adding a bank account
      const setAccessToken = async () =>{
        const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/set_access_token`,{
          method:"POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: `public_token=${public_token}`,
        })
        const data = await response.json()

        // TODO, prepare item token
        const newItem = {
          userId: signedUser.userId,
          access_token:data.access_token,
          item_id:data.item_id
        }

        // TODO, add created item into database
        const postItemsResponse = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/account/create-item`,{
          method:"POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(newItem)
        })

        const {code,returningId} = await postItemsResponse.json()
        switch(code){
        // TODO, if all is successful adding into DB, add object into items array.
          case 201:
            const userAccountsInfo = await getItemInfo([newItem])
            const accountsLiabilities = await getAccountLiabilities([newItem])
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

            console.log(formatAccounts)

            const newArrBanks = bankAccounts
            newArrBanks.push(formatAccounts[0])
            setBankAccounts(newArrBanks)
            break;
        }
      }
      setAccessToken()
    },
    onExit:(err, metadata)=>{
      console.log(err)
      console.log('yo bro pleaseee fix this issue!!!')
    }
  })
  return (
    <button onClick = {()=> openPlaid()} 
    className = {`px-4 py-3 font-medium  transition bg-red-500 rounded-md hover:bg-red-500/75 disabled:bg-gray-500 disabled:text-white flex items-center justify-center gap-x-3
      ${customCSS}
    `}
    disabled = {!ready}>
      {text}
      <PlusIcon className = "w-5 h-5"/>
    </button>
  )
}

export default PlaidButton
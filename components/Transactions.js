

import { useContext, useEffect, useState } from "react"
import { ItemsContext } from "../context/creditcards"
import { ArrowSmLeftIcon, XIcon } from "@heroicons/react/solid"
import { TabContext } from "../context/currentTab"
import Button from '../components/Button'
import TimeFilter from "./TimeFilter"
import Categories from "./Categories"
import { getTransactions } from "../function/getTransactions"
import Sortby from "./Sortby"
import Slider from "./Slider"
import TransactionItem from "./TransactionItem"
import CreditLiabilityBox from "./CreditLiabilityBox"
import CheckingInfoBox from "./CheckingInfoBox"
import TotalEarnedBox from './TotalEarnedBox'
import TotalSpendBox from "./TotalSpendBox"

export default function Transactions(){
  const {transactions, bankAccounts, transactionsId, setBankAccounts} = useContext(ItemsContext)
  const {tab,setTab} = useContext(TabContext)
  const [displayAmount, setDisplayAmount] = useState(0)
  const [penalty, setPenalty] = useState(0)
  const [userLocale, setUserLocale] = useState()
  const [categories, setCategories] = useState()
  const [renderAmount, setRenderAmount] = useState(3)
  const [openTrackSpending, setOpenTrackSpending] = useState(false)
  const [display, setDisplay] = useState(null)
  const [timeframe, setTimeframe] = useState('6 months')
  const [sortBy, setSortBy] = useState()

  
  // TODO, use effect is used to handle the display for this component. 
  // It depends on the transactionsId state which is being set on the credit cards
  // page when a user decides to view more information.
  useEffect(()=>{
    let pos;
    bankAccounts.forEach((bankAccount,bankIndex)=>{
      if(!bankAccount.accounts){
        return
      }
      pos = bankAccount.accounts?.findIndex(acc=> acc.account_id === transactionsId)
      // TODO, if a match is found, stop searching and set the display data
      if(pos != -1){
        setDisplay(bankAccounts[bankIndex].accounts[pos])
        setDisplayAmount(bankAccounts[bankIndex]?.accounts[pos]?.balances?.current)
      }
    })
    return(()=>{})
  },[transactionsId])


  // TODO, use effect is used to handle users interests if they decide to do a custom payment amount through the slider.
  useEffect(()=>{
    // TODO, error handling, this is if the user chooses to view their checkings.
    if(!display?.accLiability) return

    // TODO, cannot display penalties if custom amoutn is greater than the statement balance.
    if(displayAmount >= display?.accLiability?.last_statement_balance){
      setPenalty(0)
      return
    }
    const apr = display.accLiability?.aprs.filter(apr => apr.apr_type === 'purchase_apr') || 29.99
    const penalty = ((apr[0]?.apr_percentage || 29.99 / 100).toFixed(4) / 12 * display.balances?.current) - ((apr[0]?.apr_percentage || 29.99 / 100).toFixed(4) / 12 * displayAmount)
    setPenalty(penalty.toFixed(2))
  },[displayAmount])

  //TODO, use effect is used to determine users language preference
  useEffect(()=>{
    let isMounted = true
    // TODO, figure out the users language preference, used to format the currency display.
    const navigator = navigator?.languages && navigator?.languages.length ? navigator?.languages[0] : navigator?.language
    if(isMounted){
      setUserLocale(navigator || 'en-us')  
    }

    // TODO, cleanup function
    return(()=>{
      isMounted=false
    })
  },[])

  
  const formatDate = (e) =>{
    // TODO, return formatted date for a better user experience
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    if(!e){
      return  
    }
    // TODO, split the given date, usually in the format yyyy-mm-dd
    const splitDate = e.split("-")
    const month = months[parseInt(splitDate[1]) -1]
    const year = splitDate[0]
    const day = splitDate[2]
    return{month,year,day}
  }

  // TODO, everytime a user leaves the transactions page/component, set the default timeframe to 6 months, this way
  // weird ui glitches are avoided. 
  useEffect(()=>{
    console.log('ok bro')
    if(tab != 'Transactions'){
      setTimeframe('6 months')
    }
  },[tab])


  // TODO, used effect is used to filter out transactions for the categories section. Only runs when the display state changes
  useEffect(()=>{
    let filterCategories = []
    // TODO, check if object has data in it, else, don't run
    if(display != null){
      // TODO, for each transaction, push a category that isn't already inside the 
      // array, if array contains category, add transaction to the correct category.
      switch(timeframe){
        case '6 months':
          display?.transactions?.forEach((transaction)=>{
            if(!filterCategories.some(obj => obj.category === transaction.category[1])){
              // TODO, create new array adding the category name and the transactions
              const obj = {category:transaction.category[1] || transaction.category[0], transactions:[transaction]}
              filterCategories.push(obj)
              setCategories(filterCategories)
            }else{
              // TODO, if cateogory name already exists, add the current transaction to that array. 
              const pos = filterCategories.findIndex(obj=>obj.category === transaction.category[1])
              filterCategories[pos].transactions.push(transaction)
              setCategories(filterCategories)
            }
          })
          break
        case '12 months':
          display?.twelveMonthTransactions?.forEach((transaction)=>{
            if(!filterCategories.some(obj => obj.category === transaction.category[1])){
              // TODO, create new array adding the category name and the transactions
              const obj = {category:transaction.category[1] || transaction.category[0], transactions:[transaction]}
              filterCategories.push(obj)
              setCategories(filterCategories)
            }else{
              // TODO, if cateogory name already exists, add the current transaction to that array. 
              const pos = filterCategories.findIndex(obj=>obj.category === transaction.category[1])
              filterCategories[pos].transactions.push(transaction)
              setCategories(filterCategories)
            }
          })
          break
        case '24 months':
          display?.twentyFourMonthTransactions?.forEach((transaction)=>{
            if(!filterCategories.some(obj => obj.category === transaction.category[1])){
              // TODO, create new array adding the category name and the transactions
              const obj = {category:transaction.category[1] || transaction.category[0], transactions:[transaction]}
              filterCategories.push(obj)
              setCategories(filterCategories)
            }else{
              // TODO, if cateogory name already exists, add the current transaction to that array. 
              const pos = filterCategories.findIndex(obj=>obj.category === transaction.category[1])
              filterCategories[pos].transactions.push(transaction)
              setCategories(filterCategories)
            }
          })
          break
        case 'YTD':
          display?.ytdTransactions?.forEach((transaction)=>{
            if(!filterCategories.some(obj => obj.category === transaction.category[1])){
              // TODO, create new array adding the category name and the transactions
              const obj = {category:transaction.category[1] || transaction.category[0], transactions:[transaction]}
              filterCategories.push(obj)
              setCategories(filterCategories)
            }else{
              // TODO, if cateogory name already exists, add the current transaction to that array. 
              const pos = filterCategories.findIndex(obj=>obj.category === transaction.category[1])
              filterCategories[pos].transactions.push(transaction)
              setCategories(filterCategories)
            }
          })
          break
      }
    }
  },[display])

  // TODO, change transactions once user has changed the filter value. Default is '6 Months'
  useEffect(()=>{
    switch(timeframe){
      // TODO, 6 months is default transactions, do not alter anything. 
      case '6 months':
        return
      case 'YTD':
        bankAccounts.forEach(async (account,bankAccountIndex)=>{
          const accountIdPos = account.accounts?.findIndex(acc => acc.account_id === display.account_id)
          // TODO, check if an id is found, if not return 
          if(accountIdPos == -1 || accountIdPos === undefined){
            return
          }else{
            // TODO, check if object already exists, do not run getTransactions multiple times
            if(bankAccounts[bankAccountIndex].accounts[accountIdPos].hasOwnProperty('ytdTransactions')){
              return
            }else{
              // TODO, if an object is not found, create the object and store in bank accounts.
              let today = new Date().getMonth() + 1 
              let monthsTillJan = 0;

              // TODO, figure out how many months is it from the current month to January. 
              while(today > 1){
                monthsTillJan+=1
                today--
              }
              // TODO, get transactions from the new data and store into bankAccounts state
              const ytdTransactions = await getTransactions(monthsTillJan,bankAccounts[bankAccountIndex].accessToken, transactionsId)
              const addYtd = [...bankAccounts]
              addYtd[bankAccountIndex].accounts[accountIdPos] = {...addYtd[bankAccountIndex].accounts[accountIdPos], ytdTransactions: ytdTransactions}
              await setBankAccounts(addYtd)

              // TODO, cause state to rerender
              setDisplay(bankAccounts[bankAccountIndex].accounts[accountIdPos])
            }
          }
        })
        break;
      case '12 months':
        bankAccounts.forEach(async (account,bankAccountIndex)=>{
          const accountIdPos = account.accounts?.findIndex(acc => acc.account_id === display.account_id)
          // TODO, check if an id is found, if not return 
          if(accountIdPos == -1 || accountIdPos === undefined){
            return
          }else{
            // TODO, check if object already exists, do not run getTransactions multiple times
            if(bankAccounts[bankAccountIndex].accounts[accountIdPos].hasOwnProperty('twelveMonthTransactions')){
              return
            }else{
              // TODO, get transactions from the new data and store into bankAccounts state
              const twelveMonthTransactions = await getTransactions(12,bankAccounts[bankAccountIndex].accessToken, transactionsId)
              const addTwelveMonth = [...bankAccounts]
              addTwelveMonth[bankAccountIndex].accounts[accountIdPos] = {...addTwelveMonth[bankAccountIndex].accounts[accountIdPos], twelveMonthTransactions: twelveMonthTransactions}
              await setBankAccounts(addTwelveMonth)

              // TODO, cause state to rerender
              setDisplay(bankAccounts[bankAccountIndex].accounts[accountIdPos])
            }
          }
        })
        break;
      case '24 months':
        bankAccounts.forEach(async (account,bankAccountIndex)=>{
          const accountIdPos = account.accounts?.findIndex(acc => acc.account_id === display.account_id)
          // TODO, check if an id is found, if not return 
          if(accountIdPos == -1 || accountIdPos === undefined){
            return
          }else{
            // TODO, check if object already exists, do not run getTransactions multiple times
            if(bankAccounts[bankAccountIndex].accounts[accountIdPos].hasOwnProperty('twentyFourMonthTransactions')){
              return
            }else{
              // TODO, get transactions from the new data and store into bankAccounts state
              const twentyFourMonthTransactions = await getTransactions(24,bankAccounts[bankAccountIndex].accessToken, transactionsId)
              const addTwentyFourMonth = [...bankAccounts]
              addTwentyFourMonth[bankAccountIndex].accounts[accountIdPos] = {...addTwentyFourMonth[bankAccountIndex].accounts[accountIdPos], twentyFourMonthTransactions: twentyFourMonthTransactions}
              await setBankAccounts(addTwentyFourMonth)

              // TODO, cause state to rerender
              setDisplay(bankAccounts[bankAccountIndex].accounts[accountIdPos])
            }
          }
        })
        break;
    }
    return(()=>{})
  },[timeframe])


  // TODO, this useeffect handles filtering from old to new / vice versa
  useEffect(()=>{
    if(display != null){
      const sortTransactions = () =>{
        // TODO, based on timeframe, sort transactions accordingly
        switch(timeframe){
          case '6 months':
            // TODO, check the sortby value.
            if(sortBy === 'Newest to Oldest'){
              const NewToOld = display?.transactions?.sort(function(a,b){
                return new Date(b.date) - new Date(a.date)
              })

              // TODO, reference current display
              const displayArr = display
  
              // TODO, replace current display transactions with reversed transactions
              displayArr.transactions = NewToOld
              setDisplay(displayArr)
            }else{
              const OldToNew = display?.transactions?.sort(function(a,b){
                return new Date(a.date) - new Date(b.date)
              })

              // TODO, reference current display
              const displayArr = display
  
              // TODO, replace current display transactions with reversed transactions
              displayArr.transactions = OldToNew
              setDisplay(displayArr)
            }
            break;
          case 'YTD':
            // TODO, check the sortby value.
            if(sortBy === 'Newest to Oldest'){
              const NewToOld = display?.ytdTransactions?.sort(function(a,b){
                return new Date(b.date) - new Date(a.date)
              })
              // TODO, reference current display
              const displayArr = display
  
              // TODO, replace current display transactions with reversed transactions
              displayArr.transactions = NewToOld
              setDisplay(displayArr)
            }else{
              const OldToNew = display?.ytdTransactions?.sort(function(a,b){
                return new Date(a.date) - new Date(b.date)
              })

              // TODO, reference current display
              const displayArr = display
  
              // TODO, replace current display transactions with reversed transactions
              displayArr.transactions = OldToNew
              setDisplay(displayArr)
            }
            break;
          case '12 months':
            // TODO, check the sortby value.
            if(sortBy === 'Newest to Oldest'){
              const NewToOld = display?.twelveMonthTransactions?.sort(function(a,b){
                return new Date(b.date) - new Date(a.date)
              })
              // TODO, reference current display
              const displayArr = display
  
              // TODO, replace current display transactions with reversed transactions
              displayArr.transactions = NewToOld
              setDisplay(displayArr)
            }else{
              const OldToNew = display?.twelveMonthTransactions?.sort(function(a,b){
                return new Date(a.date) - new Date(b.date)
              })

              // TODO, reference current display
              const displayArr = display
  
              // TODO, replace current display transactions with reversed transactions
              displayArr.transactions = OldToNew
              setDisplay(displayArr)
            }
            break;
          case '24 months':
            // TODO, check the sortby value.
            if(sortBy === 'Newest to Oldest'){
              const NewToOld = display?.twentyFourMonthTransactions?.sort(function(a,b){
                return new Date(b.date) - new Date(a.date)
              })
              // TODO, reference current display
              const displayArr = display
  
              // TODO, replace current display transactions with reversed transactions
              displayArr.transactions = NewToOld
              setDisplay(displayArr)
            }else{
              const OldToNew = display?.twentyFourMonthTransactions?.sort(function(a,b){
                return new Date(a.date) - new Date(b.date)
              })

              // TODO, reference current display
              const displayArr = display
  
              // TODO, replace current display transactions with reversed transactions
              displayArr.transactions = OldToNew
              setDisplay(displayArr)
            }
            break;
        }
      }
      sortTransactions()
    }
    return(()=>{})
  },[sortBy, timeframe])

return (
    <div className = {`absolute top-0 bottom-0 left-0 right-0 h-full px-4  rounded-xl bg-neutral-900 ${tab === 'Transactions' ? 'translate-x-0' : 'translate-x-full'} transition duration-300 ease-in-out`}>
      <div className = "grid w-full h-full overflow-y-scroll xl:grid-cols-2 gap-x-6 removeScrollbar">
        {display != null && (
          <>
            <div>
              <div className = "w-full py-10 ">
                <h1 className = "flex items-center justify-start text-2xl font-semibold text-white sm:text-3xl lg:text-4xl gap-x-3">
                  <span onClick = {()=>setTab('View Accounts')}><ArrowSmLeftIcon className = "w-12 h-12 text-red-500 transition cursor-pointer hover:text-red-500/75"/></span>
                  <span className = "text-xl sm:text-3xl lg:text-4xl">{display?.official_name}</span>
                </h1>
                <p className = "mt-2 text-neutral-400">View all your most recent transactions.</p>
              </div>
              <div className = "grid w-full grid-cols-4 gap-3 my-2 xl:grid-cols-3 rounded-xl">
                  {display.accLiability ? 
                    <>
                      <CreditLiabilityBox display = {display} displayAmount = {displayAmount} userLocale = {userLocale} penalty = {penalty}/>
                    </>
                    :
                    <>
                      <CheckingInfoBox displayAmount = {displayAmount} userLocale = {userLocale} display = {display}/>
                    </>
                  }
                  <TotalEarnedBox display = {display} timeframe = {timeframe} userLocale = {userLocale}/>
                  <TotalSpendBox display = {display} timeframe = {timeframe} userLocale = {userLocale}/>
              </div>

              {/* Custom payments slider, only available for credit card accounts. */}
              {display.accLiability && (
                <Slider display = {display} setDisplayAmount = {setDisplayAmount}/>
              )}
              
              {/* Transactions */}
              <div className = "mt-16 mb-2">
                <p className = "mb-2 text-2xl font-semibold text-white">Transactions</p>
                <Sortby setSortBy = {setSortBy} timeframe = {timeframe} display = {display}/>
                <TimeFilter setTimeframe = {setTimeframe} timeframe = {timeframe} display = {display}/>
              </div>

              <div className = "p-6 mb-10 rounded-xl bg-neutral-800/50">
                <div className = "flex flex-col items-start justify-between gap-6 lg:flex-row">
                </div>
                {timeframe === '6 months' && (
                  <>
                  {display.transactions?.map((transaction,index)=>(
                    <TransactionItem display = {display} transaction = {transaction} index = {index} key = {index}/>
                  ))}
                  </>
                )}
                {timeframe === 'YTD' && (
                  <>
                    {display?.ytdTransactions?.map((transaction,index)=>(
                      <TransactionItem display = {display} transaction = {transaction} index = {index} key = {index}/>
                    ))}
                  </>
                )}
                {timeframe === '12 months' && (
                  <>
                    {display?.twelveMonthTransactions?.map((transaction,index)=>(
                      <TransactionItem display = {display} transaction = {transaction} index = {index} key = {index}/>
                    ))}
                  </>
                )}
                {timeframe === '24 months' && (
                  <>
                    {display?.twentyFourMonthTransactions?.map((transaction,index)=>(
                      <TransactionItem display = {display} transaction = {transaction} index = {index} key = {index}/>
                    ))}
                  </>
                )}

              </div>
            </div>
            

            {/* SPENDING BY CATEGORIES */}
            <div className = {`xl:bg-black/0  xl:block 
            z-20 ${openTrackSpending ? 'bg-black/50' : 'bg-black-0'} transition
            fixed inset-0 pointer-events-none
            `}>
              <div className = {`
                xl:w-[50%] xl:h-full px-6 rounded-xl xl:block xl:py-6
                overflow-y-scroll
                removeScrollbar
                absolute top-0 right-0 bottom-0  bg-neutral-900 w-[80%] sm:w-[70%] py-24 pointer-events-auto
                ${openTrackSpending ? 'translate-x-0 xl:translate-x-0':'translate-x-full xl:translate-x-0'}
                transition
                `}>
                <div className = "absolute top-0 right-0 mt-6 mr-6 text-xl xl:hidden"
                onClick = {()=>setOpenTrackSpending(!openTrackSpending)}
                ><XIcon className = "w-8 h-8 text-red-500 transition cursor-pointer hover:text-red-500/50"/></div>
                <h1 className = "flex items-center justify-start text-2xl font-semibold text-white sm:text-3xl lg:text-4xl gap-x-3">Track your spending</h1>
                <p className = "mt-2 text-gray-400">Track all your spendature through categories.</p>
                {categories?.map((category)=>(
                  <>
                  {(category.category != 'Credit Card' &&  category.category != 'Credit' && category.category != "Payroll" && category.category != 'Deposit' && category.category != 'Withdrawal' && category.category != 'Refund') && (
                    <Categories category = {category} display = {display}/>
                  )}
                  </>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
)}
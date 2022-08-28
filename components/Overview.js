import { DotsHorizontalIcon, ClockIcon, CashIcon, CreditCardIcon} from "@heroicons/react/solid"
import { ItemsContext } from "../context/creditcards"
import { useContext, useEffect, useState } from "react"
import { TabContext } from "../context/currentTab"
import PlaidButton from "./PlaidButton"
import { UserContext } from "../context/signedUser"
const Overview = () => {
  const {bankAccounts,setBankAccounts} = useContext(ItemsContext)
  const {signedUser} = useContext(UserContext)
  const {tab} = useContext(TabContext)
  const [debtDueSoon, setDebtDueSoon] = useState()
  const [totalDebt, setTotalDebt] = useState()
  const [userLocale, setUserLocale] = useState('en-us')

  //TODO, use effect is used to determine users language preference
  useEffect(()=>{
    let isMounted = true
    // TODO, figure out the users language preference, used to format the currency display.
    const navigator = navigator?.languages && navigator?.languages.length ? navigator?.languages[0] : navigator?.language
    if(isMounted){
      setUserLocale(navigator || 'en-us')  
    }

    console.log('infinitelooptest')
    // TODO, cleanup function
    return(()=>{
      isMounted=false
    })
  },[])

  // TODO, use effect is used to set a total debt. 
  useEffect(()=>{
    (()=>{
      let total = 0
      bankAccounts.forEach((bankAccount)=>{
        bankAccount.accounts?.map((account)=>{
          if(account.subtype != 'credit card'){
            return
          }
          total+= account.balances.current
        })
      })
      setTotalDebt(total)
    })()
    console.log('infinitelooptest')
  },[bankAccounts])


  // TODO, use effect is used to display a card that is being due soon. Preferebly those that have a statement balance on them.
  useEffect(()=>{
    (()=>{
      const creditCardsLiability = [];
      bankAccounts.forEach((bankAccount)=>{
        // TODO, only display accounts that are credit cards
        bankAccount.accounts?.map((account)=>{
          if(account.subtype != 'credit card'){
            return
          }

          // TODO, get how many days are left till the user has to pay.
          const today = new Date()
          const dueDate = new Date(account.accLiability.next_payment_due_date)
          const differenceInTime = dueDate.getTime() - today.getTime()
          const differenceInDays = differenceInTime / (1000 * 3600 * 24)
          if(differenceInDays < 0){
            return  
          }

          // TODO, create an object displaying necessary information.
          const cardObj = {
            account:account,
            due:account.balances.current,
            statement:account.accLiability.last_statement_balance, 
            minimumDue: account.accLiability.minimum_payment_amount,
            daysTillDue: parseInt(differenceInDays),
            dueDate: account.accLiability.next_payment_due_date,
            currencyCode: account.balances.iso_currency_code,
          }
          creditCardsLiability.push(cardObj)
        })
      })
  
      // TODO, sort credit cards by which card is due first.
      creditCardsLiability.sort((a, b) => parseInt(a.daysTillDue) - parseFloat(b.daysTillDue));
      setDebtDueSoon(creditCardsLiability)
      console.log('infinitelooptest')
    })()
  },[bankAccounts.length])



  // SPENDING BY MONTH, INTEGRATE SOON IDK
  useEffect(()=>{
    let accounts = []
    const trackSpending = async () =>{
      bankAccounts.forEach((bankAccount)=>{
        bankAccount.accounts?.forEach((account)=>{
          accounts.push(account)
        })
      })
    }
    trackSpending()
    console.log('infinitelooptest')
  },[bankAccounts.length])

  return (
    <div className = {`absolute inset-0 h-full px-10 py-16 z-20 bg-neutral-900 overflow-y-scroll removeScrollbar ${tab === 'Overview' ? 'translate-x-0' : 'translate-x-full'} transition`}>
      <div className = "w-full mb-24">
        <h1 className = "text-2xl font-semibold text-white md:text-3xl xl:text-4xl">Hi, {signedUser.firstName}, welcome back!</h1>
        <p className = "mt-2 text-neutral-400">Let&apos;s give you a quick overview of your current week.</p>
      </div>
      <div className = "w-full h-full">
        <p className = "mb-2 text-sm font-medium text-neutral-400">Helpful cards</p>
        <div className = "grid grid-cols-6 gap-6 ">
          <div className = "relative w-full col-span-6 p-6 shadow-xl lg:col-span-2 bg-zinc-800 rounded-xl">
            <CashIcon className = "mb-2 text-white w-14 h-14"/>
            <h1 className = "text-3xl font-medium text-white">{totalDebt?.toLocaleString(userLocale, {style:'currency', currency:'USD'})}</h1>
            <p className = "text-sm text-neutral-400">Total credit card debt</p>
          </div>

          {debtDueSoon?.length != 0 && (
            <div className = "relative w-full col-span-6 p-6 shadow-xl lg:col-span-4 bg-zinc-800 rounded-xl">
              <CreditCardIcon className = "mb-2 text-white w-14 h-14"/>
              <p className = 'text-xl font-medium text-white'>{debtDueSoon?.length > 1 ? ('Debts are due soon') : ('A debt is due soon.')}</p>
              <div className = "grid w-full grid-cols-1 gap-6 p-4 my-2 sm:grid-cols-2 bg-zinc-900 rounded-xl">
                {debtDueSoon?.map((debt,index)=>(
                <>
                  {debt?.due > 0 && (
                    <div className = {`${index === 0 ? ('sm:col-span-2 bg-neutral-500 p-4 rounded-xl') : ('sm:col-span-1 bg-neutral-600/50 rounded-xl p-4')}`}>
                      <p className = 'flex flex-wrap items-center justify-start gap-2 text-xs'>
                        <span className = "font-medium text-neutral-300">{debt.account.name}</span>
                        <span className = "text-neutral-300">*{debt.account.mask}</span>
                      </p>
                      <p className = "mt-4 text-sm text-neutral-300/75">
                        {debt.statement ? 'Statement balance' : 'Total balance'}
                      </p>
                      <p className = "text-2xl font-medium text-white">{(debt.statement)?.toLocaleString(userLocale, {style: 'currency', currency:debt.currencyCode}) || (debt.due).toLocaleString(userLocale, {style: 'currency', currency:debt.currencyCode})}</p>
                      <p className = "mt-4 text-sm text-neutral-300/75">
                        <span>You have </span>
                        <span className = "font-medium text-white">{debt.daysTillDue} </span>
                        <span className = "font-medium text-white">{debt.daysTillDue === 1 ? 'day ' : 'days '}</span>
                        <span>left to pay this off.</span>
                      </p>
                    </div>
                  )}
                  <>
                    {debtDueSoon.length > 1 && (
                      <>
                      {!debt?.due === 0 && (
                        <p className = "text-white">Some card</p>
                      )}
                      </>
                    )}
                  </>
                </>
                ))}
              </div>
            </div>
          )}
        </div>

        <p className = "mt-24 mb-2 text-sm font-medium text-neutral-400">Accounts needed extra action.</p>
        <div className = "grid grid-cols-1 gap-16 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-neutral-700/10 rounded-xl ">
        {bankAccounts.map((bankAccount)=>(
          <>
          {bankAccount.error && (
              <div className = "flex flex-col items-start justify-center w-full grid-cols-1 px-4 py-6 transition rounded-lg bg-neutral-800 hover:shadow-md" key = {bankAccount.error}>
                <h3 className = "mb-3 text-xl text-neutral-400">{bankAccount.institution}</h3>
                <div className = "mb-5 text-sm text-neutral-600">
                  <p className = "text-neutral-400">This account requires extra attention.</p>
                  <p className = "text-xs">Error: {bankAccount.error}</p>
                </div>
                <PlaidButton text = {bankAccount.error == 'ITEM_LOGIN_REQUIRED' && 'Relogin'} customCSS = 'w-full' removeOldItem = {bankAccount.id}/>
              </div>
          )}
        </>
        ))} 
        </div>
      </div>
    </div>
  )
}

export default Overview
import { useContext, useEffect, useState, useRef } from "react"
import { ItemsContext } from "../context/creditcards"
import PlaidButton from "./PlaidButton"
import { TabContext } from "../context/currentTab"
import { CreateLinkToken } from "../function/createLink"

export default function CreditCards({selected}){
  const {bankAccounts,setBankAccounts, setTransactions, setDisplayTransactions,setTransactionsId} = useContext(ItemsContext)
  const {tab,setTab} = useContext(TabContext)
  
  const viewTransactions = async (access_token, accountId) =>{
    const endDate = new Date()
    let endDateFormat = endDate.toISOString().substring(0,10);

    const startDate = new Date(endDate.setMonth(endDate.getMonth()-6))
    let startDateFormat = startDate.toISOString().substring(0,10);


    // TODO, fetch transactions of account that was clicked
    const getTransactionsResponse = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/transactions/${access_token}/${startDateFormat}/${endDateFormat}`, {
      method:"GET",
    })
    const {transactions} = await getTransactionsResponse.json()

    
    // TODO, filter out selected card to display the right transactions
    const selectedCardTransactions = (transactions.filter(transaction=> transaction.account_id == accountId))

    // TODO, add total balance to prepare next section
    bankAccounts.forEach((account,index)=>{
      const accountIdPos = account.accounts?.findIndex(acc => acc.account_id === accountId)
      if(accountIdPos == -1 || accountIdPos === undefined){
        return
      }else{
        const addTransactions = [...bankAccounts]
        addTransactions[index].accounts[accountIdPos] = {...addTransactions[index].accounts[accountIdPos], transactions:selectedCardTransactions}
        setBankAccounts(addTransactions)
      }
    })

    // TODO, switch to next page
    setTransactionsId(accountId)
    setTab('Transactions')
    setDisplayTransactions(true)
  }


  return (
    <div className = {`absolute inset-0 h-full p-10 bg-neutral-900 ${tab} overflow-y-scroll removeScrollbar`}>
      <div className = "w-full mb-24">
        <h1 className = "text-4xl font-semibold text-white">Accounts</h1>
        <p className = "mt-2 text-neutral-400">View all accounts you have linked with us.</p>
      </div>
      <div className = "w-full h-full">
        {bankAccounts.map((bankAccount)=>(
          <>
            {bankAccount.error && (
              <div className = "my-24">
                <p className = "mb-2 text-sm font-medium text-neutral-400">Accounts that need extra attention.</p>
                <div className = "grid grid-cols-1 gap-16 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-neutral-700/10 rounded-xl">
                  <div className = "flex flex-col items-start justify-center w-full grid-cols-1 px-4 py-6 transition rounded-lg bg-neutral-800 hover:shadow-md" key = {bankAccount.error}>
                    <h3 className = "mb-3 text-xl text-neutral-400">{bankAccount.institution}</h3>
                    <div className = "mb-5 text-sm text-neutral-600">
                      <p className = "text-neutral-400">This account requires extra attention.</p>
                      <p className = "text-xs">Error: {bankAccount.error}</p>
                    </div>
                    <PlaidButton text = {bankAccount.error == 'ITEM_LOGIN_REQUIRED' && 'Relogin'} customCSS = 'w-full' removeOldItem = {bankAccount.id}/>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}

        {bankAccounts.map((bankAccount)=>(
        <>
          {/* TODO, handle cards with error */}
          {!bankAccount.error &&
            <>
            {bankAccount.accounts.findIndex(object => object.subtype === 'credit card') === 0 && (
              <div className = "my-24">
              <p className = "mb-2 text-sm font-medium text-neutral-400">Credit Accounts</p>
              <div className = "grid grid-cols-1 gap-16 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-neutral-700/10 rounded-xl">
                {bankAccount.accounts.map((acc)=>(
                  <>
                    {acc.subtype == 'credit card' && (
                    <div className = "w-full grid-cols-1 px-4 py-6 transition rounded-lg shadow-xl bg-neutral-800" key = {acc.account_id}>
                      <h1 className = "text-2xl font-medium text-white">{acc.official_name}</h1>
                      <div className = "mt-2">
                        <p className = "flex flex-col text-xl text-neutral-400">
                          <span className = "text-sm text-gray-200">Total Balance</span>
                          <span className = "font-medium text-red-400">{(acc.balances?.current).toLocaleString('en-us',{style:"currency",currency:acc.balances.iso_currency_code})}</span>
                        </p>
                      </div>
                      <button className = 'w-full px-4 py-2 mt-4 font-medium text-white transition bg-red-500 rounded-lg hover:bg-red-500/75'
                      onClick = {()=>viewTransactions(bankAccount.accessToken, acc.account_id)}
                      >View Account</button>
                    </div>
                    )}
                  </>
                ))}
              </div>
              </div>
            )}

            {bankAccount.accounts.findIndex(object => object.subtype === 'checking') === 0 && (
              <div className = "my-24">
              <p className = "mb-2 text-sm font-medium text-neutral-400">Checking Accounts</p>
              <div className = "grid grid-cols-1 gap-16 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-neutral-700/10 rounded-xl">
                {bankAccount.accounts.map((acc)=>(
                  <>
                    {acc.subtype == 'checking' && (
                    <div className = "w-full grid-cols-1 px-4 py-6 transition rounded-lg shadow-xl bg-neutral-800" key = {acc.account_id}>
                      <h1 className = "text-2xl font-medium text-white">{acc.official_name}</h1>
                      <div className = "mt-2">
                        <p className = "flex flex-col text-xl text-neutral-400">
                          <span className = "text-sm text-gray-200">Total Balance</span>
                          <span className = "font-medium text-red-400">{(acc.balances?.current).toLocaleString('en-us',{style:"currency",currency:acc.balances.iso_currency_code})}</span>
                        </p>
                      </div>
                      <button className = 'w-full px-4 py-2 mt-4 font-medium text-white transition bg-red-500 rounded-lg hover:bg-red-500/75'
                      onClick = {()=>viewTransactions(bankAccount.accessToken,acc.account_id)}
                      >View Transactions</button>
                    </div>
                    )}
                  </>
                ))}
              </div>
              </div>
            )}
            </>
          }
        </>
        ))}


        

            {/* BANK ACCOUNTS THAT NEED EXTRA ATTENTION DIV */}
        <PlaidButton customCSS = 'fixed bottom-5 right-5 h-16  rounded-xl w-16 text-neutral-900 hover:bg-red-600/50 hover:text-white py-4 bg-red-600 shadow-xl'/>
      </div>
    </div>
  )
}
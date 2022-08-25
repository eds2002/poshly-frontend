import React, { useEffect } from 'react'

import { useState } from 'react'
const TotalSpendBox = ({display, timeframe, userLocale}) => {

  const [totalSpend, setTotalSpend] = useState(0)

  useEffect(()=>{
    setTotalSpend(0)
    const getSpending = () =>{
      if(display!= null){
        switch(timeframe){
          case '6 months':
            const getSpending = display?.transactions?.filter(transaction => Math.sign(transaction.amount) === 1 )
            let total = 0;
            getSpending?.forEach(payment =>{
              total += payment.amount * -1
            })
            setTotalSpend(total.toFixed(2))
            break;
          case '12 months':
            const getSpending12Month = display?.twelveMonthTransactions?.filter(transaction => Math.sign(transaction.amount) === 1 )
            let twelveMonthTotal = 0;
            getSpending12Month?.forEach(payment =>{
              twelveMonthTotal += payment.amount * -1
            })
            setTotalSpend(twelveMonthTotal.toFixed(2))
            break
          case 'YTD':
            const getSpendingYTD = display?.ytdTransactions?.filter(transaction => Math.sign(transaction.amount) === 1 )
            let ytdTransactionsTotal = 0;
            getSpendingYTD?.forEach(payment =>{
              ytdTransactionsTotal += payment.amount * -1
            })
            setTotalSpend(ytdTransactionsTotal.toFixed(2))
            break
          case '24 months':
            const getSpending24Month = display?.twentyFourMonthTransactions?.filter(transaction => Math.sign(transaction.amount) === 1 )
            let twentyFourMonthTotal = 0;
            getSpending24Month?.forEach(payment =>{
              twentyFourMonthTotal += payment.amount * -1
            })
            setTotalSpend(twentyFourMonthTotal.toFixed(2))
            break

            
        }
      }
    }
    getSpending()
    console.log('infinitelooptest')
    return(()=>{})
  },[timeframe, display])
  return (
    <div className = "col-span-2 p-6 bg-sky-600 rounded-xl xl:col-span-1">
      <span className = "text-neutral-300 text-">Total Spent</span>
      <p className = "text-2xl font-medium text-white">{parseFloat(totalSpend).toLocaleString(userLocale,{style:'currency',currency:display.balances?.iso_currency_code || 'USD'})}</p>
      <p className = "mt-2 text-sm text-neutral-300/75">Within <b>{timeframe}</b></p>
    </div>
  )
}

export default TotalSpendBox
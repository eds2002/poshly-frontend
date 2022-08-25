import { useEffect, useState } from "react";

const TotalEarnedBox = ({display, timeframe, userLocale}) => {
  const [totalEarned, setTotalEarned] = useState(0)
  useEffect(()=>{
    setTotalEarned(0)
    const getIncomeEarned = () =>{
      if(display != null){
        switch(timeframe){
          case '6 months':
            // TODO, get payemnts, when plaid returns transactions for checking, negatives usually means payments for some odd reason.
            const getPayments = display?.transactions?.filter(transaction => Math.sign(transaction.amount) === -1)
            
            // TODO, add filtered transactions to total variable.
            let total = 0;
            getPayments?.forEach(payment =>{
              total += payment.amount * -1
            })
            setTotalEarned(total.toFixed(2))
            break;
          case '12 months':
            // TODO, get payemnts, when plaid returns transactions for checking, negatives usually means payments for some odd reason.
            const getPayments12Month = display?.twelveMonthTransactions?.filter(transaction => Math.sign(transaction.amount) === -1)
            
            // TODO, add filtered transactions to total variable.
            let total12Month = 0;
            getPayments12Month?.forEach(payment =>{
              total12Month += payment.amount * -1
            })
            setTotalEarned(total12Month.toFixed(2))
            break;
          case '24 months':
            // TODO, get payemnts, when plaid returns transactions for checking, negatives usually means payments for some odd reason.
            const getPayments24Month = display?.twentyFourMonthTransactions?.filter(transaction => Math.sign(transaction.amount) === -1)
            
            // TODO, add filtered transactions to total variable.
            let total24Month = 0;
            getPayments24Month?.forEach(payment =>{
              total24Month += payment.amount * -1
            })
            setTotalEarned(total24Month.toFixed(2))
            break;
          case 'YTD':
            // TODO, get payemnts, when plaid returns transactions for checking, negatives usually means payments for some odd reason.
            const getPaymentsYTD = display?.ytdTransactions?.filter(transaction => Math.sign(transaction.amount) === -1)
            
            // TODO, add filtered transactions to total variable.
            let totalYTD = 0;
            getPaymentsYTD?.forEach(payment =>{
              totalYTD += payment.amount * -1
            })
            setTotalEarned(totalYTD.toFixed(2))
            break;

        }
      }
    }
    getIncomeEarned()
    console.log('infinitelooptest')
    return(()=>{})
  },[timeframe,display])



  return (
    <div className = "col-span-2 p-6 bg-indigo-600 rounded-xl xl:col-span-1">
      <span className = "text-neutral-300 ">Total earned</span>
      <p className = "text-2xl font-medium text-white">{parseFloat(totalEarned).toLocaleString(userLocale,{style:'currency',currency:display.balances?.iso_currency_code || 'USD'})}</p>
      <p className = "mt-2 text-sm text-neutral-300/75">Within <b>{timeframe}</b></p>
    </div>
  )
}

export default TotalEarnedBox
import React from 'react'

const CreditLiabilityBox = ({displayAmount, userLocale, display, penalty}) => {
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
  return (
    <div className = "w-full col-span-4 p-6 bg-red-600/70 rounded-xl">
      <span className = "text-base font-medium text-neutral-300">
      {displayAmount == display.balances?.current ? 'Total Balance' : parseInt(displayAmount) === display.accLiability?.minimum_payment_amount ? "Minimum Payment" : "Custom Amount"}
      </span>
      <h2 className = "text-3xl font-medium text-white">{parseFloat(displayAmount).toLocaleString(userLocale,{style:'currency',currency:display.balances?.iso_currency_code || 'USD'})}</h2>
      <p className = "flex flex-col items-start justify-start mt-2 mb-4 xl:items-center xl:justify-between xl:flex-row">
        <span className = " text-neutral-300">{displayAmount != display.balances?.current ? 'Estimated Penalty Charges' : `Statement Balance as of ${formatDate(display.accLiability?.last_statement_issue_date).month} ${formatDate(display.accLiability?.last_statement_issue_date).day} ${formatDate(display.accLiability?.last_statement_issue_date).year}`}</span>
        <span className = "text-lg font-medium text-neutral-100 ">{displayAmount != display.balances?.current ?  parseFloat(penalty).toLocaleString(userLocale,{style:'currency',currency:display.balances?.iso_currency_code || 'USD'}) : (display.accLiability?.last_statement_balance).toLocaleString(userLocale,{style:'currency',currency:display.balances?.iso_currency_code || 'USD'})}</span>
      </p>

      <p className = "mt-2 text-sm text-neutral-300">{(display.accLiability?.minimum_payment_amount).toLocaleString(userLocale,{style:'currency',currency:display.balances?.iso_currency_code || 'USD' })} minimum payment due on {formatDate(display.accLiability?.next_payment_due_date).month} {formatDate(display.accLiability?.next_payment_due_date).day}</p>
    </div>
  )
}

export default CreditLiabilityBox
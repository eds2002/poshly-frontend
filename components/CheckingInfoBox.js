import React from 'react'

const CheckingInfoBox = ({displayAmount,display,userLocale}) => {
  return (
    <div className = "col-span-4 p-6 bg-red-600 rounded-xl xl:col-span-1">
      <span className = "text-base font-medium text-neutral-300">
        Available balance
      </span>
      <h2 className = "text-2xl font-medium text-white">{parseFloat(displayAmount).toLocaleString(userLocale,{style:'currency',currency:display.balances?.iso_currency_code || 'USD'})}</h2>
    </div>
  )
}

export default CheckingInfoBox
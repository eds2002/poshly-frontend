import React from 'react'

const CheckingInfoBox = ({displayAmount,display,userLocale}) => {
  return (
    <div className = "w-full col-span-4 p-6 bg-red-600/70 rounded-xl">
      <span className = "text-base font-medium text-neutral-200">
        Available balance
      </span>
      <h2 className = "text-2xl font-medium text-white">{parseFloat(displayAmount).toLocaleString(userLocale,{style:'currency',currency:display.balances?.iso_currency_code || 'USD'})}</h2>
    </div>
  )
}

export default CheckingInfoBox
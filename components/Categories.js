import { useState, useEffect } from "react";
import Button from "./Button";
import TransactionItem from "./TransactionItem";

const Categories = ({category, display}) => {
  const [userLocale, setUserLocale] = useState()
  const [renderAmount, setRenderAmount] = useState(3)

  const getTransactionTotals = (category) =>{

    let total = 0
    let currencyCode = 'USD';
    category.transactions.forEach(transaction =>{
      total+=transaction.amount
      currencyCode = transaction.iso_currency_code
    })
    return {total,currencyCode}
  }

  useEffect(()=>{
    // TODO, figure out the users language preference, used to format the currency display.
    const navigator = navigator?.languages && navigator?.languages.length ? navigator?.languages[0] : navigator?.language
    setUserLocale(navigator || 'en-us')  
  },[])


  return (
    <div className = "w-full">
      <p className = "mt-10 text-sm font-medium text-red-400">{category.category}</p>
      <div className = {`
      w-full h-auto p-6 mt-2 bg-neutral-800/20 rounded-xl
      ${category.transactions.length > 3 && ('hover:bg-neutral-800/60 cursor-pointer')}
      `}
      onClick = {()=>category.transactions.length > 3 && (setRenderAmount(renderAmount === 3 ? 1000 : 3))}
      >
        <div>
          <p className = "text-xl font-medium text-neutral-400">Total Spendature:
            <span className = "text-white"> {(getTransactionTotals(category).total).toLocaleString(userLocale,{style:'currency',currency:getTransactionTotals(category).currencyCode})}</span>
          </p>
        </div>
        <div>
          <p className = "mt-6 text-lg font-medium text-white">View all your expenses:</p>
          {category.transactions.map((transaction,index)=>(
            <>
              {index < renderAmount && (
                <TransactionItem display = {display} transaction = {transaction} index = {index} key = {index}/>
              )}
            </>
          ))}
        </div>
      </div>
  </div>
  )
}

export default Categories
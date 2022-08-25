import { useState, useEffect } from "react";
import Button from "./Button";

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
  const handleAmount = (amount) =>{
    // TODO, this function is for ux design purposes

    // TODO, checking has a weird thing where transactions that are deposits return as negative.
    // handle the error by flipping the false/true returns
    if (Math.sign(amount) === -1) {
      if(display.subtype === "checking"){
        return false
      }
      return true
    }else{
      if(display.subtype === "checking"){
        return true
      }
      return false
    }
  }

  useEffect(()=>{
    // TODO, figure out the users language preference, used to format the currency display.
    const navigator = navigator?.languages && navigator?.languages.length ? navigator?.languages[0] : navigator?.language
    setUserLocale(navigator || 'en-us')  
    console.log('infinitelooptest')
  },[])


  return (
    <div className = "w-full">
      <p className = "mt-10 text-sm font-medium text-red-400">{category.category}</p>
      <div className = "w-full h-auto p-6 mt-2 bg-neutral-800/20 rounded-xl">
        <div>
          <p className = "text-xl font-medium text-neutral-400">Total Spendature:
            <span className = "text-white"> {(getTransactionTotals(category).total).toLocaleString(userLocale,{style:'currency',currency:getTransactionTotals(category).currencyCode})}</span>
          </p>
        </div>
        <div>
          <p className = "mt-6 text-lg font-medium text-white">View your recent expenses:</p>
          {category.transactions.map((transaction,index)=>(
            <>
              {index < renderAmount && (
                <div key = {index} className = "mb-6" >
                  <p className = "my-2 text-sm text-neutral-600">{formatDate(transaction.date).month} {formatDate(transaction.date).day} {formatDate(transaction.date).year}</p>
                  <div className = {`flex items-center justify-between px-4 py-3 ${handleAmount(transaction.amount) ? 'bg-red-400 bg-opacity-[3%]' : 'bg-green-200 bg-opacity-[3%]'} rounded-xl`}>
                    <h1 className = "text-sm font-medium text-white ">{transaction.merchant_name || transaction.name}</h1>
                    <p className = {`${handleAmount(transaction.amount) ? 'text-red-500' :'text-green-500'}`}>
                      {/* TODO, amounts in checking are displayed weird, if the user decides to view their checkings, flip the negatives and positives */}
                      {display.subtype === "checking" ? 
                      <>
                        {(transaction.amount * -1).toLocaleString('en-us',{style:"currency",currency:transaction.iso_currency_code})}
                      </>
                      :
                      <>
                        {(transaction.amount).toLocaleString('en-us',{style:"currency",currency:transaction.iso_currency_code})}
                      </>
                      }
                    </p>
                  </div>
                </div>
              )}
            </>
          ))}
          {category.transactions.length > 3 && (
              <div onClick = {()=>setRenderAmount(renderAmount === 3 ? 1000 : 3)}>                
                <Button text = {renderAmount === 3 ? 'View all my expenses' : 'View less expenses '} customCSS = {'bg-red-500/25 mt-5 w-auto'} setRenderAmount = {setRenderAmount} />
              </div>
          )}
        </div>
      </div>
  </div>
  )
}

export default Categories
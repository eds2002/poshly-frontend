
const TransactionItem = ({transaction,display,index}) => {
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
  return (
    <div key = {index} className = "my-6" >
      <p className = "my-2 text-sm font-light text-neutral-600">{formatDate(transaction.date).month} {formatDate(transaction.date).day} {formatDate(transaction.date).year}</p>
      <div className = {`flex items-center justify-between px-4 py-3 ${handleAmount(transaction.amount) ? 'bg-red-400 bg-opacity-[3%]' : 'bg-green-200 bg-opacity-[3%]'} rounded-xl`}>
        <h1 className = "flex-1 text-sm font-medium text-white">{transaction.merchant_name || transaction.name}</h1>
        <p className = {`flex-1 text-right ${handleAmount(transaction.amount) ? 'text-red-500' :'text-green-500'}`}>
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
  )
}

export default TransactionItem
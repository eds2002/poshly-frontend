const https = require('https')

export const getAccountTransactions = async(accounts) =>{
  const accountTransactions = await Promise.all(accounts.map(async (account)=>{
    console.log(account)
    // TODO, figure out how many months is it from the current month to January. 
    let today = new Date().getMonth() + 1 
    let monthsTillJan = 0;

    while(today > 1){
      monthsTillJan+=1
      today--
    }

    // Get todays date
    const endDate = new Date()
    let endDateFormat = endDate.toISOString().substring(0,10);

    // Subtract new date with monthsTillJan variable YTD transactions
    const startDate = new Date(endDate.setMonth(endDate.getMonth()-monthsTillJan))
    let startDateFormat = startDate.toISOString().substring(0,10);




    // TODO, fetch transactions of account that was clicked
    const getTransactionsResponse = await fetch(`${process.env.DOMAIN}/api/transactions/${account.access_token}/${startDateFormat}/${endDateFormat}`, {
      method:"GET",

      agent: new https.Agent({
        rejectUnauthorized: false
      })
    })
    const {transactions} = await getTransactionsResponse.json()
    
    try{
      return (transactions)
    }catch(e){
      return(e)
    }
  }))
  return(accountTransactions)
}
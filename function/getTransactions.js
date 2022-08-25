export const getTransactions = async (timeframe, access_token, accountId) =>{
  const endDate = new Date()
  let endDateFormat = endDate.toISOString().substring(0,10);

  const startDate = new Date(endDate.setMonth(endDate.getMonth()-timeframe))
  console.log(timeframe)
  let startDateFormat = startDate.toISOString().substring(0,10);
  console.log(startDateFormat)

  // TODO, fetch transactions of account that was clicked
  const getTransactionsResponse = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/transactions/${access_token}/${startDateFormat}/${endDateFormat}`, {
    method:"GET",
  })
  const {transactions} = await getTransactionsResponse.json()
  
  // TODO, filter out selected card to display the right transactions
  const selectedCardTransactions = (transactions.filter(transaction=> transaction.account_id == accountId))
  return(selectedCardTransactions)

}
const https = require('https')


export const getItemInfo = async (userAccounts) =>{
const accountInfo = await  Promise.all(userAccounts.map(async (account)=>{
  const getItemResponse = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/item/${account.access_token}`, {
    method:"GET",

    // FOR DEV TESTING PURPOSES
    agent: new https.Agent({
    rejectUnauthorized: false
  })
  })
  const getBalanceResponse = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/balance/${account.access_token}`, {
    method:"GET",
    // // FOR DEV TESTING PURPOSES
    // agent: new https.Agent({
    //   rejectUnauthorized: false
    // })
  })
  const {institution} = await getItemResponse.json()
  const {accounts,error} = await getBalanceResponse.json()
  console.log(error)
  return await {
    id:account.id || null,
    accessToken: account.access_token || null,
    institution: institution.name || null,
    accounts:accounts || null,
    error:error ? error.error_code : null
  }
}))
return accountInfo
}
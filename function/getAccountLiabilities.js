const https = require('https')

export const getAccountLiabilities = async(accounts) =>{
  const accountLiabilities = await Promise.all(accounts.map(async (account)=>{
    const getLiabilities = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/liabilities/${account.access_token}`, {
      method:"GET",

      // // FOR DEV TESTING PURPOSES
      // agent: new https.Agent({
      //   rejectUnauthorized: false
      // })
    })

    const {error, liabilities} = await getLiabilities.json()
    if(error){
      return error
    }else{
      return (liabilities)
    }
  }))
  return(accountLiabilities)
}
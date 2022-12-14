// const https = require('https')


export const getUserItems = async (userId) =>{
  const getItemsResponse = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/account/get-items/${userId}`,{
    method:"GET",
    headers: {
      'Content-Type': 'application/json'
    },

    // // FOR DEV TESTING PURPOSES
    // agent: new https.Agent({
    //   rejectUnauthorized: false
    // })
  }) 

  const {code,message,accounts} = await getItemsResponse.json()
  switch(code){
    case 404:
      return(`ERROR: ${message}`)
    case 200:
      return (accounts)
  }
}
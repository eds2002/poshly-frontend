const https = require('https')
export const verifyToken = async () =>{
  const verifyToken = await fetch(`${process.env.DOMAIN}/cookie/verify`,{
    method:"GET",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    agent: new https.Agent({
      rejectUnauthorized: false
    })
  })

  console.log(verifyToken)
}
import { usePlaidLink } from "react-plaid-link";


export const CreateLinkToken = async () =>{
  // TODO, First, create a link token, and store to local storage for future use
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/create_link_token`, {
    method:"POST",
  })
  // Error handling
  if (!response.ok) {
    console.log('vro, something is wrong')
    return;
  }
  const data = await response.json()
  if(data){
    if(data.error != null){
      console.log('vro something else is wrong',data.error) 
      return
    }
    localStorage.setItem("link_token", data.link_token)
  }
}
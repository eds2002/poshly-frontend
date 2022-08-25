import {createContext, useState} from 'react'

const UserContext = createContext()

const UserProvider = ({children})=>{
  const [signedUser, setSignedUser] = useState({})

  return(
    <UserContext.Provider value = {{
      signedUser,
      setSignedUser,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export {UserProvider, UserContext}
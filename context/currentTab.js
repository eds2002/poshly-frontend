import { createContext, useState } from "react";

const TabContext = createContext()

const TabsProvider = ({children})=>{

  const [tab, setTab] = useState('Overview')
  const [subLink,setSublink] = useState('Profile')
  return(
    <TabContext.Provider value = {{
      tab,setTab,subLink,setSublink
    }}>
      {children}
    </TabContext.Provider>
  )
}

export {TabsProvider, TabContext}

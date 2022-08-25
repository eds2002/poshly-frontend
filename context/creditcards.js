import {createContext, useContext, useEffect, useState} from 'react'
import {UserContext} from '../context/signedUser'

const ItemsContext = createContext()

const ItemsProvider = ({children})=>{
  const {signedUser} = useContext(UserContext)
  const [item, setItem] = useState([])
  const [bankAccounts, setBankAccounts] = useState([])
  const [transactions, setTransactions] = useState()
  const [displayTransactions, setDisplayTransactions] = useState(false)
  const [transactionsId,setTransactionsId] = useState(false)
  return(
    <ItemsContext.Provider value= {{
      item,
      setItem,
      bankAccounts,
      setBankAccounts,
      transactions,
      setTransactions,
      displayTransactions,
      setDisplayTransactions,
      transactionsId,
      setTransactionsId
  }}>
    {children}
  </ItemsContext.Provider>
  )
}

export {ItemsProvider, ItemsContext}
import { ChevronDownIcon, FilterIcon,CollectionIcon } from '@heroicons/react/solid'
import {useEffect, useState} from 'react'

const Sortby = ({setSortBy, timeframe,display}) => {

  const [sortValue, setSortValue] = useState('Newest to Oldest')
  const [openModal, setOpenModal] = useState(false)

  const handleSort = () =>{
    console.log('work ?')
    setSortValue(sortValue === 'Newest to Oldest' ? 'Oldest to Newest' : 'Newest to Oldest')
    setSortBy(sortValue)
  }

  useEffect(()=>{
    setSortValue('Newest to Oldest')
    setSortBy(sortValue)
    console.log('infinitelooptest')
    return(()=>{})
  },[display])


  return (
    <div className = "inline-block text-white list-none bg-red-600 rounded-xl" onClick = {()=>setOpenModal(!openModal)}>
      <li className = "flex w-full gap-3 px-4 py-2 text-sm transition cursor-pointer rounded-xl">
        {sortValue}
        <ChevronDownIcon className = "w-5 h-5"/>
      </li>
      {openModal && (
        <div className = "rounded-full">
          <li className = "flex gap-3 px-4 py-4 text-sm transition cursor-pointer rounded-bl-xl rounded-br-xl bg-red-700/90 hover:bg-red-800/50" onClick = {()=>handleSort()}>
          {sortValue === 'Newest to Oldest' ? 
            <>
              Oldest to Newest
            </>
              
          :
            <>
              Newest to Oldest
            </>
          }
          </li>
        </div>
      )}
    </div>
  )
}

export default Sortby
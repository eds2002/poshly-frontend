import { useEffect, useState } from "react"
import { ChevronLeftIcon } from "@heroicons/react/solid"



const TimeFilter = ({setTimeframe,timeframe, display}) => {
  const filters = ['6 months','12 months','24 months','YTD']
  const [currentFilter, setCurrentFilter] = useState(timeframe)
  const [displayFilters, setDisplayFilters] = useState(false)

  const handleFilterChange = (filter) =>{
    setDisplayFilters(!displayFilters)
    setCurrentFilter(filter)
  }

  useEffect(()=>{
    setTimeframe(currentFilter)
    console.log('infinitelooptest')
    return(()=>{})
  },[currentFilter])

  useEffect(()=>{
    setTimeframe('6 months')
    setCurrentFilter('6 months')
    console.log('infinitelooptest')
  },[display])


  return (
    <div className = 'flex flex-wrap w-full gap-3 my-2'>
      <li className = "flex items-center justify-center px-4 py-2 text-xs font-medium text-white list-none transition cursor-pointer sm:text-sm bg-neutral-400/25 rounded-xl hover:bg-neutral-500/50 gap-x-2"
      onClick = {()=>setDisplayFilters(!displayFilters)}
      >
        <p className = "flex items-center justify-center gpa-x-3">{currentFilter}</p>
        <span className = {`${displayFilters ? 'rotate-0' : 'rotate-180'} transition`}><ChevronLeftIcon className = "w-5 h-5" /></span>
      </li>
      <div className ="flex gap-x-3">
        {filters.map((filter,index)=>(
          <>
            {filter != currentFilter && (
              <li className = {`${displayFilters ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} px-4 py-2 text-sm font-medium text-white list-none transition cursor-pointer bg-neutral-800/50 rounded-xl hover:bg-neutral-700`}
              onClick = {()=>handleFilterChange(filter)}
              >{filter}</li>
            )}
          </>

        ))}
      </div>
    </div>
  )
}

export default TimeFilter
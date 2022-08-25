import React from 'react'

const Slider = ({display,setDisplayAmount}) => {

  const handleChange = (e) =>{
    setDisplayAmount(e.target.value)
  }

  return (
    <div className = "w-full p-6 my-2 bg-neutral-800/50 rounded-xl gap-y-6">
      <input type = "range" className = "w-full bg-gray-500 rounded-lg outline-none appearance-none cursor-pointer range-lg dark:bg-gray-700" step="0.01" defaultValue = {display.balances?.current}  min = {display.accLiability?.minimum_payment_amount} max = {display.balances?.current}
      onChange = {(e)=>setDisplayAmount(e.target.value)}
      />
    </div>
  )
}

export default Slider
import React, { useState } from 'react'

export default function Input(props){

  const {error,onChange,wrongPassword,id, ...inputProps} = props
  const [invalid, setInvalid] = useState(false)
  const handleFocus = (e) =>{
    setInvalid(true)
  }
  return (
    <>
      <input key = {id} {...inputProps} className = {`
      w-full basis-full px-4 text-base py-3 my-2 transition rounded-md text-neutral-300 outline-none ${invalid && 'invalid:bg-red-600/25 invalid:text-red-200 focus:invalid:bg-red-600/25 focus:invalid:text-red-200 valid:bg-neutral-900/65 valid:text-white '} bg-neutral-600/25 focus:bg-neutral-600/75 placeholder:text-white/50 hover:bg-neutral-600/70
      ${(invalid && wrongPassword) && ('bg-red-600/25 focus:text-red-200 focus:bg-red-600/25')}
      `} onBlur={handleFocus}
        onChange = {onChange}
      />
      {error != null && (
        <p className='text-sm text-red-600 '>{error}</p>
      )}
    </>
  )
}
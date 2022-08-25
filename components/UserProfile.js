import { useState, useRef,useContext } from "react"
import { UserContext } from "../context/signedUser"
import Link from 'next/link'
import { ThemeContext } from "../context/themePreference"


const settingsLinks = [
  {
    name:'Settings',
    link:'#'
  },
  {
    name:"Sign Out",
    link:"#",
  }
]

export default function UserProfile(){
  const {signedUser} = useContext(UserContext)
  const {theme} = useContext(ThemeContext)
  const [expand, setExpand] = useState(false)
  const expandRef = useRef()
  
  return (
    <div className = {`hidden w-full max-w-xs mt-10 ml-auto ${theme === 'dark' ? 'bg-neutral-700/20' : 'bg-neutral-200'} rounded-xl lg:block`}>
      <div className = {`
       flex relative items-center justify-center flex-col  p-4 transition rounded-lg h-26`}>
        <div className = "flex flex-col items-center justify-center p-4 rounded-xl">
          <div className = "flex flex-col xl:flex-row gap-x-2">
            <h3 className = {`hidden text-xl font-medium ${theme === 'dark' ? 'text-white' : 'text-neutral-900'} lg:block sm:text-sm md:text-md lg:text-lg`}>{signedUser.firstName}</h3>
            <h3 className = {`hidden text-xl font-medium ${theme === 'dark' ? 'text-white' : 'text-neutral-900'} lg:block sm:text-sm md:text-md lg:text-lg`}>{signedUser.lastName}</h3>
          </div>
          <p className = {`hidden text-xs ${theme === 'dark' ? 'text-neutral-300/75' : 'text-neutral-600/75'} lg:block md:text-sm lg:text-base`}>{signedUser.email}</p>
        </div>
      </div>
    </div>
  )
}
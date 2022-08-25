import { TabContext } from "../context/currentTab"
import { useContext, useState  } from "react"
import ProfileSettings from "./ProfileSettings"

const Settings = () => {
  const {tab, subLink} = useContext(TabContext)
  return (
    <div className = {`absolute top-0 overflow-y-scroll bottom-0 left-0 right-0 h-full p-10 bg-neutral-900 ${tab === 'Settings' ? 'translate-x-0' : 'translate-x-full'} transition duration-300 ease-in-out removeScrollbar`}>
      <div className = "w-full mb-24">
        <h1 className = "text-4xl font-semibold text-white">{subLink} settings.</h1>
        <p className = "mt-2 text-neutral-400">View all your account information. </p>
      </div>
      <div className = "w-full h-full py-24">
          <ProfileSettings/>
      </div>
    </div>
  )
}

export default Settings
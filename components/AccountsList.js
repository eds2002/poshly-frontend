import CreditCards from "./CreditCards";
import PlaidButton from "./PlaidButton";
import { TabContext } from "../context/currentTab";
import { useContext, useState } from "react";
import {HomeIcon, CogIcon, LogoutIcon, UserIcon, CollectionIcon, KeyIcon } from '@heroicons/react/solid'
import { ThemeContext } from "../context/themePreference";


export default function AccountsList(){
  const {tab,setTab, subLink,setSublink} = useContext(TabContext)
  const {theme} = useContext(ThemeContext)
  const tabs = [
    {
      name:'Overview',
      func: () =>{
        setTab('Overview')
      },
      icon: <HomeIcon className = "w-7 h-7"/>
    },
    {
      name:'Accounts',
      func: () =>{
        setTab('Accounts')
      },
      icon: <UserIcon className = "w-7 h-7"/>
    },
    {
      name:'Settings',
      func: () =>{
        setTab('Settings')
      },
      icon: <CogIcon className = " w-7 h-7"/>,
      subLink:[
        {
          name:'Profile',
          func: () =>{
            setSublink('Profile')
          },
          icon: <UserIcon className = "w-5 h-5 "/>,
        },
        {
          name:'Accounts',
          func: () =>{
            setSublink('Accounts')
          },
          icon: <CollectionIcon className = "w-5 h-5 "/>,
        },
      ]
    },
  ]

  console.log(tab)  

  return (
    <div className = "relative w-full h-full max-w-xs mt-8 mb-10 ml-auto lg:mt-0">
      <nav>
        {tabs.map((currentTab,index)=>(
          <>
            {currentTab.name === tab ? 
            <li key = {index}
            className = {`items-center justify-center block p-3 my-4 text-base font-medium text-white list-none lg:p-4 lg:items-start rounded-xl ${theme === 'dark' ? 'bg-neutral-900/50':'bg-neutral-100'} gap-x-3`}
            >

              <span className = "flex items-center text-red-500 gap-x-3 ">
              <span className = "mx-auto lg:mx-0">{currentTab.icon} </span>
              <span className="hidden lg:block">{currentTab.name}</span></span>
              {currentTab.subLink?.map((link,index)=>(
                <li key = {index} className = {`items-center text-sm justify-start p-3 my-4 flex font-medium list-none lg:p-4 lg:items-start rounded-xl  cursor-pointer gap-x-3 
                ${theme === 'dark' && subLink === link.name ? ('text-red-500 bg-neutral-800 cursor-auto') : ('bg-neutral-700/20 ')}
                ${theme === 'light' && subLink === link.name ? ('text-red-500 bg-white cursor-auto') : (' bg-gray-100  ')}
                `}
                onClick = {link.func}
                >
                <span className = "mx-auto lg:mx-0">{link.icon}</span> <span className = "hidden lg:block">{link.name}</span>
                </li>
              ))}
            </li>
            :
            <li onClick = {currentTab.func}
            className = {`flex items-center justify-center p-3 my-4 text-base font-medium text-white list-none cursor-pointer lg:justify-start lg:p-4 rounded-xl ${theme === 'dark' ? 'hover:bg-neutral-900/50' : 'hover:bg-neutral-100'} gap-x-3`}
            >
              <p className = {`mx-auto ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-900'} lg:mx-0`}>{currentTab.icon}</p>
              <p className = {`hidden lg:block ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>{currentTab.name}</p>
            </li>
            }
          </>
        ))}
      </nav>
      <li className = {`absolute bottom-0 flex items-center justify-start w-full p-4 list-none cursor-pointer rounded-xl ${theme === 'dark' ? 'hover:text-red-500 text-neutral-200 hover:bg-neutral-900/50' : 'hover:text-red-500 text-neutral-900 hover:bg-neutral-200'} gap-x-3`}>



        <LogoutIcon className = "mx-auto w-7 h-7 lg:mx-0"/>
        <span className="hidden lg:block">Sign out</span>
      </li>
    </div>
  )
}

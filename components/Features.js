import { useState } from "react"
import Image from 'next/image'
import debtsImg from '../assets/debts.png'
import spendingImg from '../assets/spending.png'
import penaltiesImg from '../assets/penalties.png'
import { BellIcon, CreditCardIcon, CalculatorIcon } from '@heroicons/react/solid';

const Features = () => {

  const [currentFeature, setCurrentFeature] = useState(1)

  const featuresDesc = [
    {
      id:1,
      name:'Track your spending by category',
      desc:'Track what you end up spending the most on.',
      icon:<CreditCardIcon className = "mb-3 text-red-500 w-7 h-7"/>
    },
    {
      id:2,
      name:'Payment reminders',
      desc:'It\'s easy to forget your payment dates without Poshly. We make sure to remind you of a payment due soon.',
      icon:<BellIcon className = "mb-3 text-red-500 w-7 h-7"/>
    },
    {
      id:3,
      name:'Penalty charges calculator',
      desc:'It\'s always best to pay your bill in full, but if you cannot, we\'ll estimate the charges for you.',
      icon:<CalculatorIcon className = "mb-3 text-red-500 w-7 h-7"/>
    },
  ]

  return (
    <section className = "w-full py-24 bg-image rounded-tr-3xl rounded-tl-3xl" id = "features">
      <div className = "px-4 mx-auto max-w-7xl">
        <div className = "">
          <h1 className = "max-w-md text-3xl font-medium text-red-500">It's time to become financially successful.</h1>
          <p className = "max-w-md mt-4 text-base md:text-lg text-neutral-400">
          Poshly was built for those for who use multiple credit cards and are trying to get control of their finances. 
          </p>
        </div>
        {/* FEATURES SECTION */}
        <div className = "flex flex-col items-center justify-center mt-10 gap-x-10 md:flex-row">
          <div className = "flex items-center justify-center flex-1 w-full h-full">
            {currentFeature == 2 && (
              <div className = "relative w-full h-[500px] max-w-xl rounded-xl"> 
                <Image src = {debtsImg} layout ='fill' className = "object-cover object-bottom h-full rounded-xl" priority/>
              </div>
            )}
            {currentFeature == 1 && (
              <div className = "relative w-full h-[500px] max-w-xl rounded-xl"> 
                <Image src = {spendingImg} layout ='fill' className = "object-cover object-top h-full rounded-xl" priority/>
              </div>
            )}
            {currentFeature == 3 && (
              <div className = "relative w-full h-[500px] max-w-xl rounded-xl "> 
                <Image src = {penaltiesImg} layout ='fill' className = "object-cover object-top h-full rounded-xl" priority/>
              </div>
            )}
          </div>

          <div className = "grid flex-1 grid-cols-1 grid-rows-3 gap-6 mt-10">
            {featuresDesc.map((feature)=>(
              <div className = {`font-medium w-full h-full p-6 hover:bg-neutral-900/90 rounded-xl cursor-pointer ${feature.id === currentFeature && ('bg-neutral-900/90 cursor-default')}`}
              key = {feature.id}
              onClick = {()=>setCurrentFeature(feature.id)}
              >
                <span>{feature.icon}</span>
                <h3 className = "text-base text-red-500 md:text-lg xl:text-xl">{feature.name}</h3>
                <p className = "text-sm md:text-base xl:text-lg text-neutral-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
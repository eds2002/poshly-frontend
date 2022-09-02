import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className = "flex items-center justify-start w-full h-full ">
      <div className = "flex flex-col items-start justify-center">
        <p className = "text-5xl font-medium text-neutral-200">Careless spending? </p>
        <p className = "mb-6 font-medium text-white text-7xl"> Not with <span className = "font-semibold text-red-500">Poshly.</span></p>
        <div className = "flex items-center justify-center">
          <Link href = "/register">
            <a>
              <Button text = 'Sign up today' customCSS = 'w-52 hover:scale-95 scale-100 transition duration-500'/>
            </a>
          </Link>
          <Link href = "/login">
            <a>
              <li className = "ml-4 text-sm text-red-500 list-none">Sign in instead</li>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
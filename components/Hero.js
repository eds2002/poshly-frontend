import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className = "flex items-center justify-start w-full h-[80%] px-4 mx-auto max-w-7xl">
      <div className = "flex flex-col items-start justify-center">
        <p className = "text-3xl font-medium xl:text-4xl text-neutral-200">Careless spending? Not with <span className = "font-semibold text-red-500">Poshly.</span></p>
        <p className = "max-w-sm mt-2 mb-5 text-base text-neutral-300 xl:text-lg">
          You will never miss another payment again with Poshly.
        </p>
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
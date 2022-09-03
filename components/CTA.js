import React from 'react'
import Button from './Button'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className = "w-full py-24 ">
      <div className = "px-4 mx-auto max-w-7xl">
        <div className = "relative flex flex-col items-center justify-center w-full h-full px-6 py-24 rounded-xl">
          <h1 className = "text-4xl font-medium text-center text-white">Our mission? Ending your <span className = "text-red-500">debt.</span></h1>
          <h3 className = "mt-2 text-2xl font-medium text-left text-neutral-300">Let&apos;s get you started today</h3>
          <Link href = "/register">
            <a>
              <Button text = 'Sign up today' customCSS = 'w-52 hover:scale-95 scale-100 transition duration-500 mt-10'/>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTA
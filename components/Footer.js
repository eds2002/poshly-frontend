import React from 'react'
import Link from 'next/link'
import Button from './Button'

const Footer = () => {
  const nav = [
    {
      name:'Home',
      href:'/#home'
    },
    {
      name:'Features',
      href:'/#features'
    },
  ]
  return (
    <section className = "w-full pt-24 pb-10 bg-black">
      <div className = "w-full px-4 mx-auto max-w-7xl">
        <h1 className = "text-4xl font-medium text-red-500">Poshly</h1>
        <p className = "mt-2 text-lg text-neutral-400">Financial freedom starts here.</p>
        <ul className = "flex items-center mt-10 text-neutral-400 gap-x-4">
          {nav.map((link)=>(
            <Link href = {link.href} key = {link.name}>
              <a>
                <li className = "px-4 transition duration-500 rounded-md bg-neutral-900 hover:bg-red-500 hover:text-white">{link.name}</li>
              </a>
            </Link>
          ))}
        </ul>
        <div className = "mt-10 border-t border-neutral-800">
          <p className = "mt-5 text-center text-neutral-400">© Copyright 2022. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
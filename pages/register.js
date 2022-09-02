import React, { useEffect } from 'react'
import Input from '../components/Input'
import { useState } from 'react';
import Button from '../components/Button'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Register(){
  const [wrongPassword, setWrongPassword] = useState(false)
  const [errorMessages, setErrorMessages] = useState({
    emailError:null,
  })
  const [values, setValues] = useState({
    firstName: "",
    lastName:"",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const disabled = values.firstName === "" || values.lastName === "" || values.email === "" || values.password === "" || values.confirmPassword === "" || wrongPassword ? true : false

  const inputs = [
    {
      id:1,
      type:'text',
      name:'firstName',
      placeholder: 'First name',
      required:true,
      error: null
    },
    {
      id:2,
      name:'lastName',
      type:'text',
      placeholder: 'Last name',
      required:true,
      error: null
    },
    {
      id:3,
      name:'email',
      type:'email',
      placeholder: 'Email',
      required:true,
      error: errorMessages.emailError
    },
    {
      id:4,
      name:'password',
      type:'password',
      placeholder: 'Password',
      required:true,
      error: null,
      autoComplete:'new-password'
    },
    {
      id:5,
      type:'password',
      name:'confirmPassword',
      placeholder: 'Confirm Password',
      required:true,
      error: null,
      wrongPassword: wrongPassword,
    }
  ]

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(wrongPassword){
      return
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/user/register`,{
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        firstName:values.firstName,
        lastName:values.lastName,
        email:values.email,
        password:values.password
      })
    })

    const {code,message} = await response.json()
    switch(code){
      case 409:
        setErrorMessages({emailError:message})
        break
      default:
        setErrorMessages({emailError:null})
        break
    }
  }
  useEffect(()=>{
    if(values.confirmPassword != values.password){
      setWrongPassword(true)
    }else{
      setWrongPassword(false)
    }
    console.log('infinitelooptest')
  },[values])

  return (
    <main>
      <div className = "h-screen overflow-y-scroll">
        <Navbar/>
        <section className = "flex flex-col items-center justify-center w-full h-[90%] bg-neutral-900">
          <div className = "max-w-sm px-6 mx-auto md:max-w-md lg:max-w-lg">
            <div>
              <h1 className = "text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">Register your account.</h1>
              <p className = "mt-2 mb-5 text-sm text-neutral-400 sm:text-base">Let&apos;s get you up and running as quickly as possible.</p>
            </div>
            <form className = "flex flex-col items-center justify-center w-full bg-neutral-900/50 rounded-xl"
            onSubmit = {(e)=>handleSubmit(e)}
            >
              <div className = "flex w-full gap-x-3">
                {inputs.map((input,index)=>(
                  <>
                  {index < 2 && (
                    <Input {...input} onChange = {onChange}/>
                  )}
                  </>
                ))}
              </div>
              <div className = "flex flex-col w-full">
                {inputs.map((input,index)=>(
                  <>
                  {index >= 2 && (
                    <Input {...input} onChange = {onChange}/>
                  )}
                  </>
                ))}
              </div>
              <Button text = "Create account" customCSS={'mt-5'} disabled = {disabled}/>
            </form>
          </div>
        </section>
        <Footer/>
      </div>
    </main>
  )
}
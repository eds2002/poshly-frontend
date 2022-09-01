import React, { useEffect } from 'react'
import Input from '../components/Input'
import { useState } from 'react';
import Button from '../components/Button'
import {useRouter} from 'next/router'

const Login = () => {
  const router = useRouter()
  const [errorMessages, setErrorMessages] = useState({
    emailError:null,
  })
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const disabled = values.email === "" || values.password === "" ? true : false

  const inputs = [
    {
      id:1,
      type:'email',
      name:'email',
      placeholder: 'Email',
      required:true,
      error: null
    },
    {
      id:2,
      name:'password',
      type:'password',
      placeholder: 'Password',
      required:true,
      error: null
    },
  ]

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) =>{
    e.preventDefault()
    // TODO, send user given data to api endpoint.
    const loginResponse = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/user/login`,{
      method:"POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
      },
      body:JSON.stringify({
        email:values.email,
        password:values.password
      }),
    })
    const {code, message, jwt } = await loginResponse.json()
    console.log(code,message,jwt)
    switch(code){
      // TODO, if code returned is successful (201), set cookie in header using 'set-cookie' endpoint
      // ...If more errors appear, add as you go.
      case 201:
        const setCookieResponse = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/cookie/set-cookie/${jwt}`,{
          method:"GET",
          headers:{
            'Content-Type': 'application/json',
          },
          credentials: "include",
        }) 
        const {code} = await setCookieResponse.json()
        switch(code){
          case 201:
            router.push('/user/dashboard')
            break;
          case 401:
            alert('yo ngl error in something you did bro')
            break;
        }
        break;
    }
    


  }

  return (
    <main>
      <section className = "flex flex-col items-center justify-center w-full h-screen bg-neutral-900">
        <div className = "max-w-sm px-6 mx-auto md:max-w-md lg:max-w-lg">
          <div>
            <h1 className = "text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">Login to your account.</h1>
            <p className = "mt-2 mb-5 text-sm text-neutral-400 sm:text-base">Hi, welcome back user.</p>
          </div>
          <form className = "flex flex-col items-center justify-center w-full bg-neutral-900/50 rounded-xl"
          onSubmit = {(e)=>handleSubmit(e)}
          >
            {inputs.map((input,index)=>(
                <Input {...input} onChange = {onChange} key = {index}/>
            ))}
            <Button text = "Create account" customCSS={'mt-5'} disabled = {disabled}/>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Login
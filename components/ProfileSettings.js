import { useState } from "react"
import Button from "./Button"


const inputs = [
  {
    id:1,
    type:'text',
    label:'First Name',
    name:'firstName',
    placeholder:'First Name',
  },
  {
    id:2,
    type:'text',
    label:'Last Name',
    name:'lastName',
    placeholder:'Last Name',
  },
  {
    id:3,
    type:'email',
    label:'Email',
    name:'email',
    placeholder:'Email',
  },
]


const ProfileSettings = () => {

  const [values, setValues] = useState({
    firstName:"",
    lastName:'',
    email:''
  })


  const onChange = (e)=>{
    const {name, value} = e.target
    setValues(prevState =>  ({...prevState, [name]:value}))
  }

  const isEmpty = () =>{
    if(values.firstName === "" && values.lastName === "" && values.email === ""){
      return true
    }else{
      return false
    }
  }


  return (
    <div className = "w-full h-auto ">
      <h1 className = "text-2xl font-medium text-white">Personal Information</h1>
      <form className = "flex flex-col pb-16">
          {inputs.map(({id,label,...inputAttrs})=>(
            <div key = {id} className = "flex flex-col items-start justify-center my-6">
              <label className = "mb-2 text-sm text-neutral-400">{label}</label>
              <input {...inputAttrs} className = "w-full p-4 text-red-200 border-none outline-none focus:outline-none bg-neutral-800 rounded-xl outline-0"
                onChange = {onChange}
              />
            </div>
          ))}
          <Button text = "Save changes" customCSS={'w-40 ml-auto mt-2'} disabled = {isEmpty()}/>
      </form>
      <h1 className = "text-2xl font-medium text-white">Delete my account</h1>
      <p className = "max-w-xl mt-2 text-sm sm:text-base text-neutral-400">
        All of your data will be deleted, personal information as well as bank information will be wiped. If you disable your account, you information will still be stored but you won&apos;t be allowed back into our site untill you have logged in and reconfirmed your password.
      </p>
      {/* <select className = "mt-4 text-sm text-white border-none outline-none bg-neutral-800 rounded-xl w-">
        <option>--Please choose an option--</option>
        <option>Don't use as much</option>
        <option>Doesn't provide me any value</option>
        <option>Doesn't work for me</option>
        <option>I just want to delete my account</option>
        <option>Other</option>
      </select> */}
      <div className = "flex mt-12 gap-x-5">
        <Button text = 'Disable my account' customCSS={'w-52'}/>
        <button className = "text-sm text-red-400">Delete my account</button>
      </div>
    </div>
  )
}

export default ProfileSettings
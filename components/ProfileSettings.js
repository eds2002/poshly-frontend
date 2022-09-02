import { useContext, useState } from "react"
import { UserContext } from "../context/signedUser"
import Button from "./Button"
import Input from "./Input"





const ProfileSettings = () => {
  const {signedUser} = useContext(UserContext)

  const inputs = [
    {
      id:1,
      type:'text',
      label:'First Name',
      name:'firstName',
      placeholder: signedUser?.firstName,
      
    },
    {
      id:2,
      type:'text',
      label:'Last Name',
      name:'lastName',
      placeholder: signedUser?.lastName,
    },
    {
      id:3,
      type:'email',
      label:'Email',
      name:'email',
      placeholder: signedUser?.email,
    },
  ]
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
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // TODO, if any of the inputs are empty, do not make button accessible.
    if(values.firstName === "" && values.lastName === "" && values.email === ""){
      return true
    }

    // TODO, check if any input is equal to already set names
    if(values.firstName === signedUser?.firstName || values.lastName === signedUser.lastName || values.email == signedUser.email){
      return true
    }

    // TODO, check if valid email format
    if(values.email != "" && values.email.match(re)){
      return false
    }
  }


  return (
    <div className = "w-full h-auto pb-24">
      <h1 className = "text-2xl font-medium text-white">Personal Information</h1>
      <form className = "flex flex-col pb-16 mt-10">
          {inputs.map(({index,label,...input})=>(
            <>
              <span className = "text-neutral-400">{label}</span>
              <Input {...input} onChange = {onChange} key = {index}/>
            </>
          ))}
          <Button text = "Save changes" customCSS={'w-40 ml-auto mt-2'} disabled = {isEmpty()}/>
      </form>
      <h1 className = "text-2xl font-medium text-white">Delete my account</h1>
      <p className = "max-w-xl mt-2 text-sm sm:text-base text-neutral-400">
        {`We're sad to see you go, but we respect your decision. All of your data will be wiped, this includes, email, your name, and your information with Plaid. `}
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
        <Button text = 'Disable my account' customCSS={'w-52 px-1 '}/>
        <button className = "text-xs text-red-400 sm:text-sm">Delete my account</button>
      </div>
    </div>
  )
}

export default ProfileSettings
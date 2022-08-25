export default function Button({text, customCSS, icon, disabled, setOpenTrackSpending}){

  const handleClick = () =>{
    if(!setOpenTrackSpending){
      return
    }else{
      setOpenTrackSpending(true)
    }
  }

  return (
    <button className = {`disabled:bg-neutral-500/50 disabled:text-neutral-400 disabled:cursor-default w-full px-4 py-2 text-white bg-red-500 hover:bg-red-500/50 transition rounded-lg ${customCSS}`
    } disabled = {disabled}
    onClick = {()=>handleClick()}
    >
      {icon && (icon)}
      {text}
    </button>
  )
}
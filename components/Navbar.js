import Button from '../components/Button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className = "flex items-center justify-between w-full px-4 mx-auto max-w-7xl" id = "home">
      <Link href ="/">
        <h1 className = "py-6 text-3xl font-semibold text-white transition duration-500 cursor-pointer hover:text-red-500">
          Poshly
        </h1>
      </Link>
      <Link href = "/register">
        <a>
          <Button text = 'Sign up' customCSS={'w-32 rounded-xl hover:scale-95 scale-100 transition duration-500'}/>
        </a>
      </Link>
    </div>
  )
}

export default Navbar
import Button from '../components/Button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className = "flex items-center justify-between w-full">
      <h1 className = "py-6 text-3xl font-semibold text-white">
        Poshly
      </h1>
      <Link href = "/register">
        <a>
          <Button text = 'Sign up' customCSS={'w-32 rounded-full hover:scale-95 scale-100 transition duration-500'}/>
        </a>
      </Link>
    </div>
  )
}

export default Navbar
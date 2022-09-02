import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function index(){
  return (
    <section className = "w-full h-[80vh] bg-neutral-900">
      <div className = "h-full px-4 mx-auto max-w-7xl">
        <Navbar/>
        <Hero/>
      </div>
    </section>
  )
}
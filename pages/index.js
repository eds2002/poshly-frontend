import CTA from "../components/CTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function index(){
  return (
    <section className = "w-full h-[100vh] bg-neutral-900 overflow-y-scroll">
      <div className = "h-full">
        <Navbar/>
        <Hero/>
        <Features/>
        <CTA/>
        <Footer/>
      </div>
    </section>
  )
}
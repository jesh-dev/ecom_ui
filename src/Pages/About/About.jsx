import Navbar from "../../Components/Navbar";
import About_Hero from "./Components/About_Hero";

export default function About() {
  return (
    <>
    <Navbar/>
    <About_Hero />
    <div className="container mx-auto px-4 py-8">
    <h1>About</h1>
    <p>This is the about page.</p>
    </div>
    </>
  )
}

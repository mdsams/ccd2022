import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import { useState, useEffect } from 'react'
import Loading from './Components/Loading'
import Speakers from './Components/Speakers/Speakers'
import About from './Components/About/About'
import Team from './Components/Teams/Teams'
import Footer from './Components/Footer/Footer'
import FAQ from './Components/FAQ/FAQ'

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Team />
      <FAQ/>
      <Footer/>
    </>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return <div>{loading ? <Loading /> : <Page />}</div>
}

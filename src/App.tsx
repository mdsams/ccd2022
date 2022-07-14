import { useState, useEffect } from 'react'
import Loading from './Components/Loading/Loading'
// import Form from './Components/Form/Form'
import Navigation from './pages/Navigation'
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Forms from './Components/Form/Form';
import Home from './pages/Home/Home';

const Page = () => {
  return (
    <>
      <Navigation />
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

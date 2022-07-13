import { useState, useEffect } from 'react'
import Loading from './Components/Loading/Loading'
import Navigation from './pages/Navigation'

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

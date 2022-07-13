import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Dashboard from './Dashboard/Dashboard'

export default function Navigation() {
  return (
    <Home />
    // <Routes>
    //   <Route path="/" component={Home} />
    //   <Route path="/dashboard" component={Dashboard} />
    // </Routes>
  )
}

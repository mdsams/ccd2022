// import { Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home/Home'
// import Dashboard from './Dashboard/Dashboard'
import Forms from '../Components/Form/Form'
import { auth } from '../services/UserAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import Dashboard from './Dashboard/Dashboard'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user] = useAuthState(auth)
  return user ? <Component /> : <Navigate to="/" replace />
}

export default function Navigation() {
  return (
    // <Home />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<PrivateRoute component={Forms} />} />
        <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
      </Routes>
    </Router>
  )
}

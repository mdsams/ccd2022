import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home/Home'
// import Dashboard from './Dashboard/Dashboard'
import Forms from '../Components/Form/Form'
import { auth, db } from '../services/UserAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import Dashboard from './Dashboard/Dashboard'
import NotFound from './NotFound/NotFound'
import { encode as base64_encode } from 'base-64'
import { getDoc, doc } from 'firebase/firestore'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user] = useAuthState(auth)
  return user ? <Component /> : <Navigate to="/ccd2022" replace />
}

// const UnRegistered = ({ component: Component, ...rest }) => {
//   const [user] = useAuthState(auth)
//   const [isExist, setIsExist] = useState(true)

//   async function DocumentID() {
//     if (user) {
//       let encodedEmail = base64_encode(user.email)
//       const docRef = doc(db, 'register', encodedEmail)
//       const docSnap = await getDoc(docRef)
//       if (docSnap.exists()) {
//         setIsExist(true)
//       } else {
//         setIsExist(false)
//       }
//     }
//   }

//   if (user) {
//     DocumentID()
//   }

//   return user && !isExist ? (
//     <Component />
//   ) : (
//     <Navigate to="/ccd2022/dashboard" replace />
//   )
// }

export default function Navigation() {
  return (
    // <Home />
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/ccd2022" element={<Home />} />
        <Route path="/ccd2022/rsvp" element={<PrivateRoute component={Forms} />} />
        <Route
          path="/ccd2022/dashboard"
          element={<PrivateRoute component={Dashboard} />}
        />
      </Routes>
    </Router>
  )
}

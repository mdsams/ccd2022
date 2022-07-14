// import { Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/Home'
// import Dashboard from './Dashboard/Dashboard'
import Forms from "../Components/Form/Form";
import Dashboard from "./Dashboard/Dashboard";

export default function Navigation() {
  return (
    // <Home />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<Forms />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

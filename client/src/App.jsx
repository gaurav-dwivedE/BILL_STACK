import React from 'react'
import BillStackLanding from './pages/BillStackLanding'
import FeaturesPage from './pages/FeaturesPage'
import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
const App = () => {
  return (
    <Routes>
      <Route path = "/" element={<BillStackLanding/>}></Route>
      <Route path = "/features" element={<FeaturesPage/>}></Route>
      <Route path = "/login" element={<LoginPage/>}></Route>
      <Route path = "/signup" element={<SignupPage/>}></Route>
    </Routes>
  )
}

export default App

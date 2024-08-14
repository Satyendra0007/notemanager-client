import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Footer from './Components/Footer'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Notes from './pages/Notes';
import SignOut from './pages/SignOut';
import { useEffect } from 'react'
import { initFlowbite } from 'flowbite'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/signout' element={<SignOut />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App

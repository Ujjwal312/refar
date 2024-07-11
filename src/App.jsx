
import "./App.css"
// Redux

// React Router
import { Route, Routes,  } from "react-router-dom"

// Components


import Error from "./pages/Error"
import Navbar from "./pages/Navbar"
// Pages
import Home from "./pages/Home"

function App() {


  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
 
       
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App

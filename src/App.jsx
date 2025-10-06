import { useState } from 'react'
import './App.css'
import Intro from './components/Intro'
import { Link ,Routes, Route, data, Outlet} from 'react-router-dom'
import News from './components/News'
import Header from './Header/Header'
import MainLayout from './components/MainLayout'



function App() {
 

  return (
    <>
  
   
        <Routes>
          <Route path="/" element={<Intro/>}></Route>
          <Route element={<MainLayout />}>
          
          <Route path="/general" element={<News/>}></Route>
          <Route path="/category/:categoryName" element={<News/>}></Route>
          </Route>
        </Routes>
     </>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './Form'
import Topbar from './Topbar'
import Table from './Table'
import View from './View'

const App = () => {
  return (
   <div>
     
   <BrowserRouter>
   <Topbar/>
   <Routes>
     <Route path='/form' element={<Form/>}/>
     <Route path='/table' element={<Table/>}/>
     <Route path='/view/:id' element={<View/>}/>
   </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App

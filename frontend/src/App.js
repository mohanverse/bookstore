import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateBook from './Pages/CreateBook'
import UpdateBook from './Pages/UpdateBook'
import DeleateBook from './Pages/DeleateBook'
import ShowSingleBook from './Pages/ShowSingleBook'
import Home from './Pages/Home'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books/create" element={<CreateBook/>} />
      <Route path="/books/update/:id" element={<UpdateBook/>} />
      <Route path="/books/delete/:id" element={<DeleateBook/>} />
      <Route path="/books/showbook/:id" element={<ShowSingleBook/>} />
    </Routes>
  )
}

export default App

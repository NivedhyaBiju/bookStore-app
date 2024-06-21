import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import YourLibrary from './pages/YourLibrary'
import CreateBooks from './components/createBooks/CreateBooks'
import BookDetails from './pages/BookDetails'

const App = () => {

  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/library' element={<YourLibrary></YourLibrary>}></Route>
        <Route path='/create' element={<CreateBooks></CreateBooks>}></Route>
        <Route path='/details/:id' element={<BookDetails></BookDetails>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App

import React from 'react'
import CreateBooks from '../components/createBooks/CreateBooks'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
  return (
    <div>
      <CreateBooks></CreateBooks>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />    
    </div>
  )
}

export default Create

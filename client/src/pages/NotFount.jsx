import React from 'react'
import {FaExclamationTriangle} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const NotFount = () => {
  return (
    <div className='d-felx flex-column justify-cotent-center align-items-center mt5'>
        <FaExclamationTriangle className='text-danger' size='5em'/>
        <h1>404</h1>
        <p className='lead'>Sorry, this page does not exist</p>
        <Link to='/' className='btn btn-primary'>Go Back</Link>
    </div>
  )
}

export default NotFount
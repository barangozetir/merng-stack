import React from 'react'
import {FaEnvelope, FaPhone, FaIdBadge} from 'react-icons/fa'

const ClientInfo = ({client}) => {
  return (
    <>
    <h5 className="mt-5">Client</h5>
    <ul className="list-group">
        <li className="list-group-item">
            <FaIdBadge className='icon'/>{client.name}
        </li>
        <li className="list-group-item">
            <FaPhone className='icon'/>{client.phone}
        </li>
        <li className="list-group-item">
            <FaEnvelope className='icon'/>{client.mail}
        </li>
    </ul>
    </>
  )
}

export default ClientInfo
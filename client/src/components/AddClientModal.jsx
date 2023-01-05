import React, {useState} from 'react'
import {FaUser} from "react-icons/fa"
import {useMutation} from "@apollo/client"
import { ADD_CLIENT } from '../mutations/clientMutations'
import { GET_CLIENTS } from '../queries/qlientQueries'

const AddClientModal = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const [addClient] = useMutation(ADD_CLIENT,{
        variables:{
            phone,
            name,
            email
        },
        update(cache, {data:{addClient}}){
            const {clients} = cache.readQuery({query:GET_CLIENTS});

            cache.writeQuery({
                query:GET_CLIENTS,
                data:{
                    clients: [...clients, addClient]
                }
            })
        }
    })


    const onSubmit =(e)=>{
        e.preventDefault();
        if(name === "" || email==="" || phone ==="") {return alert("Fill All Fields")}

        addClient(name, email, phone);
        setName('')
        setEmail('')
        setPhone('')

    }

  return (
    <>
<button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addClientModal">
  <div className='d-flex align-items-center'>
    <FaUser className='icons'/>
    <div>Add Client</div>
  </div>
</button>

<div className="modal fade" id="addClientModal" tabIndex="-1" aria-labelledby="addClientModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="addClientModalLabel">ADD Client</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <form onSubmit={onSubmit}>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className='form-control' id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div> 
        <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="text" className='form-control' id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </div> 
        <div className="mb-3">
            <label className="form-label">Mail</label>
            <input type="email" className='form-control' id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div> 
        <button type='submit' className='btn btn-secondary' data-bs-dismiss = "modal">Add Client</button>
       </form>
      </div>
      
    </div>
  </div>
</div></>
  )
}

export default AddClientModal
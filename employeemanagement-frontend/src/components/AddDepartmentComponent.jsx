import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import department from './Department'
import { useNavigate } from 'react-router-dom'
import uuid from 'react-uuid'
function AddDepartmentComponent() {

    const navigate=useNavigate()

    const [id,setId]=useState('')
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')

    const DepartmentData={name,description};

    const handleAdd=(e)=>{
        e.preventDefault()
        let ids=uuid()
        if(DepartmentData.name !== " "&& DepartmentData.description !==""){

        
         console.log(ids)
         let uniqueid=ids.slice(0,6)
        department.push(
            {
                 id:uniqueid,
                name:name,
                description:description
            }
        )
        navigate('/department')
        }else{
            alert("Please, fill in all inputes")
        }
    }

   

    
  return (



    <div>
         <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>Add Department</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Department Name' required  />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Enter Description' required />
                            </div>
                           
                            <button onClick={(e)=>handleAdd(e)} className='btn btn-success'>Save</button> {" "}
                            <Link to='/add-deparment' className='btn btn-danger' href="">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddDepartmentComponent
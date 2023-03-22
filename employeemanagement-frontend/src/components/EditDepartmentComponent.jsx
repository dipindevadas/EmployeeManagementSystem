import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import department from './Department'
import { useNavigate } from 'react-router-dom'
function EditDepartmentComponent() {

    const [id,setId]=useState(0)
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')


    useEffect(()=>{
        setId(JSON.parse(localStorage.getItem("id")))
        setName(localStorage.getItem("name"))
        setDescription(localStorage.getItem("description"))
    },[])

    const index=department.map((item)=>item.id).indexOf(id)
        let navigate=useNavigate()
   

    const handleUpdate=(e)=>{
        e.preventDefault()

        
       let dep=department[index]
       dep.name=name;
       dep.description=description;

       navigate("/department")
    }

    // console.log(id)
    // console.log(name)
    // console.log(description)


  return (
    <div>
         <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>Edit Department</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="text" placeholder='Enter Department Name' value={name} onChange={(e)=>setName(e.target.value)} />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="text"  placeholder='Enter Description' value={description} onChange={(e)=>setDescription(e.target.value)} />
                            </div>
                           
                            <button  onClick={(e)=>handleUpdate(e)} className='btn btn-success'>Update</button> {" "}
                            <Link to='/deparment' className='btn btn-danger' href="">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditDepartmentComponent
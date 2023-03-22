import React from 'react'
import department from './Department'
import { Link, useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Table from 'react-bootstrap'
function ListDepartmentComponent() {
    const [id,setId]=useState('') 
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')

    useEffect(()=>{
     setId(JSON.parse(localStorage.getItem("id")))
     setName(localStorage.getItem("name"))
     setDescription(localStorage.getItem("description"))
    },[])

    const index=department.map((item)=>item.id).indexOf(id)

        let navigate=useNavigate()

    // const handleUpdate=(e)=>{
    //     e.preventDefault()
       
    //     let dep=department[index]
    //     dep.name=name
    //     dep.description=description

    //     navigate('/department')
    // }

    
    const handleDelete=(id)=>{

        let index=department.map(item=>item.id).indexOf(id)
        department.splice(index,1)
        // console.log("clicked")
        navigate('/department')

    }


    const handleEdit=(id,name,description)=>{
        localStorage.setItem("id",JSON.stringify(id))
        localStorage.setItem("name",name)
        localStorage.setItem("description",description)

    }
  return (
    <div>
        <Link to='/add-department' className='btn btn-success mb-2 mt-3 fw-bold'>Add Department</Link>
        <h2 className='text-center mb-4 fw-bold' style={{fontFamily:'-moz-initial'}}>List Department</h2>
    <table className='table table-bordered table striped'>
      <thead>
        <tr>
         <th>Id</th>
          <th>Department</th>
          <th>Description</th>
          <th>Actions</th>
         
           </tr>
      </thead>
      <tbody>
       {
        department && department.length > 0 ?
        department.map(item=>(
            <tr>
                 <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
               
                <td>
                  <Link to={'/edit-department'}><Button onClick={()=>handleEdit(item.id,item.name
                    ,item.description)} className='my-1 mx-2 fw-bold'>Update</Button></Link>
                   <Button onClick={()=>handleDelete(item.id)} className='btn btn-danger fw-bold'>Delete</Button> </td>
               
            </tr>
        ))
        :"no data here"
       }
        
      </tbody>
      </table>
      <div className='text-center'>
        <Link to='/'><button className='btn btn-dark rounded shadow my-4 text-center'>Back To Home</button></Link>
        </div>
    
    </div>
  )
}

export default ListDepartmentComponent
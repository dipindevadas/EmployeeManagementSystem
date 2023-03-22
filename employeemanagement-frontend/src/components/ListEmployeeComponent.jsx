import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../service/EmployeeService'
const ListEmployeeComponent = (props) => {

    const [employeeArray, setEmplyeeArray]=useState([])

    props.setMyArray(employeeArray)
     
    useEffect(()=>{
        getAllEmployee();
        
    },[])


    const getAllEmployee=()=>{
        EmployeeService.getAllEmployee()
        .then(res=>{setEmplyeeArray(res.data);
            console.log(res)})
        .catch(e=>console.log(e))

      

   
    }

    const deleteEmployee=(e,id)=>{
        e.preventDefault()
        EmployeeService.deleteEmployee(id).then(getAllEmployee()).catch(e=>console.log(e));

    }
  return (
    <div className='container'>
        <Link to='/add-employee' className='btn btn-success fw-bold mb-2 mt-3' href="">Add Employee</Link>
        <h2 className='text-center mb-4 fw-bold' style={{fontFamily:'-moz-initial'}}>List Employee</h2>
        <table className='table table-bordered table striped'>
            <thead>
                <th> ID</th>
                <th> Name</th>
                <th> Department</th>
                <th> Salary </th>
                <th> Rating </th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    employeeArray.map(employee=>
                    <tr id={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.userName}</td>
                        <td>{employee.departmentName}</td>
                        <td>{employee.salary}</td>
                        <td>{employee.rating}</td>
                          <Link to={`/add-employee/${employee.id}`}  className='btn btn-info bg-info fw-bold my-2' >Update</Link>{" "}
                          <button onClick={(e)=>{deleteEmployee(e, employee.id)}} className='btn btn-danger bg-danger text-dark mx-2 fw-bold' href=''>Delete</button>

                    </tr>)
                }

            </tbody>
        </table>
        <div className='text-center'>
        <Link to='/'><button className='btn btn-dark rounded shadow my-4 text-center'>Back To Home</button></Link>
        </div>
    </div>
  )
}

export default ListEmployeeComponent
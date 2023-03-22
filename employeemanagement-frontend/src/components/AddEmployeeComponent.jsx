import React,{useState,useEffect} from 'react'
import EmployeeService from '../service/EmployeeService'
import { Link, useNavigate,useParams } from 'react-router-dom'

const AddEmployeeComponent = () => {

    // variable and method to collect andstore inputes
    const [userName,setUserName]=useState('')
    const [departmentName,setDepartmentName]=useState('')
    const [salary,setSalary]=useState('')
    const [rating,setRating]=useState('')
    const navigate=useNavigate();
    // const useParams = useParams()
    // const id = useParams.id;
    const {id} = useParams();

    const employeeData={userName,departmentName,salary,rating};

    // send data to api and navigate when successful
    const saveEmployee=(e)=>{
       e.preventDefault()

       if(employeeData.userName !== " "&& employeeData.departmentName !=="" && employeeData.salary !== "" && employeeData.rating !== ""){
           if(id){ 
            EmployeeService.updateEmployee(id, employeeData)
            .then(navigate("/employee"))
            .catch(e=>console.log(e))

           }else{
            EmployeeService.saveEmployee(employeeData)
            .then(navigate("/employee"))
            .catch(e=>console.log(e))

           }
     
       }else{

        alert("Please, fill in all inputes")
       }
      
    }

    const title=()=>{
        if(id){
            return "Update Employee";
        }else{
            return "Add Employee";
        }

    } 

    useEffect(()=>{
        if(id){
            EmployeeService.getEmployeeById(id)
            .then(res=>{
                setUserName(res.data.userName)
                setDepartmentName(res.data.departmentName)
                setSalary(res.data.salary)
                setRating(res.data.rating)
                // setFirstName(res.data.Salary)
                // setFirstName(res.data.Rating)

            })
            .catch(e=>console.log(e)
            )
        }
        
      
    },[])
  return (
    <div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>{title()}</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="text" placeholder='Enter Username' value={userName} onChange={(e)=>setUserName(e.target.value)} />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="text" placeholder='Enter The Department' value={departmentName} onChange={(e)=>setDepartmentName(e.target.value)}/>
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="number" placeholder='Enter The Salary' value={salary} onChange={(e)=>setSalary(e.target.value)} />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="number" placeholder='Enter the Rating' value={rating} onChange={(e)=>setRating(e.target.value)} />
                            </div>
                            <button onClick={(e)=>saveEmployee(e)} className='btn btn-success'>Save</button> {" "}
                            <Link to={"/employee"} className='btn btn-danger' href="">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployeeComponent
import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import department from './Department';
function Dashboard(props) {

   
    let newArray=props.array.length

    console.log(newArray)
  const depNo=department.length
  return (
    <div>
      <h3 className='text-center fw-bold my-3'>Dashboard</h3>
       <div className='my-5' style={{display:'flex',justifyContent:'center'}}>
        
        
        <Card className='shadow rounded mx-5' style={{ width: '19rem' }}>
     
      <Card.Body>
        <Card.Title className='fw-bold' style={{textDecoration:'none',fontFamily:'monospace'}}>Employee</Card.Title>
        <Card.Text>
        <p>Total Number: {newArray} </p> 
        </Card.Text>
        <Link to={'/employee'}>
        <Button variant="dark fw-bold">Go To Employee</Button>
        </Link>
      </Card.Body>
    </Card>


    
    <Card className='rounded shadow' style={{ width: '19rem' }}>
      
      <Card.Body>
        <Card.Title className='fw-bold'  style={{textDecoration:'none',fontFamily:'monospace'}}>Department</Card.Title>
        <Card.Text>
        <p>Total Number :{depNo}</p> 
        </Card.Text>
        <Link to={'/department'}>
        <Button variant="dark fw-bold">Go To Department</Button>
        </Link>
      </Card.Body>
    </Card>

    </div>
    
    </div>
  )
}

export default Dashboard
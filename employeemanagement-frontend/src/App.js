import AddEmployeeComponent from "./components/AddEmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ListDepartmentComponent from "./components/ListDepartmentComponent";
import AddDepartmentComponent from "./components/AddDepartmentComponent";
import EditDepartmentComponent from "./components/EditDepartmentComponent";
 import './App.css'
import { useState } from "react";
function App() {
  const [myArray, setArray] = useState([]);
  
  console.log(myArray)
  return (
    <Router>
      <HeaderComponent></HeaderComponent>
    <div className="container">
    
      
        <Routes>
         

          <Route path="/" element={<Dashboard  array={myArray} />}></Route>
          <Route path="/employee" element={<ListEmployeeComponent setMyArray={setArray}/>}></Route>
          <Route path="/add-employee" element={<AddEmployeeComponent/>}></Route>
          <Route path="/add-employee/:id" element={<AddEmployeeComponent/>}></Route>
          <Route path="/department" element={<ListDepartmentComponent/>}></Route>
          <Route path="/add-department" element={<AddDepartmentComponent/>}></Route>
          <Route path="/edit-department" element={<EditDepartmentComponent/>}></Route>
          
        </Routes>
      
    </div>
    <FooterComponent></FooterComponent>
    </Router>
  );
}

export default App;

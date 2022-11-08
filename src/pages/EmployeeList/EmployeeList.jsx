import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useEmployees } from "../../data/repositories/employees";
import EmployeeForm from "./components/EmployeeForm";
const EmployeeList = () => {
  const { listEmployees, addEmployee } = useEmployees();
  const [employees, setEmployees] = useState([]);
  const [creatingEmployee, setCreatingEmployee] = useState(false);

  useEffect(() => {
    listEmployees().then((result) => {
      setEmployees(result);
    });
  }, []);

  return <div>
    <h1>Employee List</h1>
    {employees.map(employee => <div key={`employee-${employee.id}`}><p>{employee.firstName} {employee.lastName}</p></div>)}
    {creatingEmployee ? <EmployeeForm cancel={() => setCreatingEmployee(false)} /> : <Button onClick={() => setCreatingEmployee(true)}>Create Employee</Button>}
  </div>
}

export default EmployeeList;
import React, { useEffect } from "react";
import { useEmployees } from "../data/repositories/employees";
const EmployeeList = () => {
  const { listEmployees } = useEmployees();
  const [employees, setEmployees] = React.useState([]);

  useEffect(() => {
    listEmployees().then((result) => {
      setEmployees(result);
    });
  }, []);
  return <div>
    <h1>Employee List</h1>
    {employees.map(employee => <div key={`employee-${employee.id}`}><p>{employee.firstName} {employee.lastName}</p></div>)}
  </div>
}

export default EmployeeList;
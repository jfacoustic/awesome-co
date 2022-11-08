import { createContext } from 'react';
import { useContext } from "react";
import HttpClient from "../httpClient";

const client = new HttpClient();
const defaultValues = {
  client,
  employees: [],
  addEmployee: (employee) => { },
  updateEmployee: (employee) => { },
  removeEmployee: (employee) => { },
  listEmployees: async () => {
    const result = await client.get("/employees");
    console.log(result);
    return result;
  },
  showEmployee: async (id) => {
    return await client.get(`/employees/${id}`);
  },
}
export const EmployeesContext = createContext(defaultValues);

export const EmployeesProvider = ({ children }) => {
  return <EmployeesContext.Provider value={defaultValues}>
    {children}
  </EmployeesContext.Provider>
}

export const useEmployees = () => useContext(EmployeesContext);
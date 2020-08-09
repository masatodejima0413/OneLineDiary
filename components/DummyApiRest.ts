import React from "react";

interface Employee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
  profile_image: string;
}

interface getEmployeeResult {
  status: "success" | "error";
  data: Employee;
}

const endpoint = "http://dummy.restapiexample.com/api/v1/employee";

export const getEmployee = async (id: number): Promise<getEmployeeResult> => {
  const res = await fetch(`${endpoint}/${id}`);
  const data = (await res.json()) as getEmployeeResult;
  return data;
};

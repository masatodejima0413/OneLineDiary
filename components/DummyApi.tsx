import React, { useEffect, useState } from "react";
import { getEmployee } from "./DummyApiRest";

interface IProps {
  id: number;
}

const Employee = ({ id }: IProps) => {
  const [name, setName] = useState("");
  useEffect(() => {
    getEmployee(id)
      .then((employee) => {
        setName(employee.data.employee_name);
      })
      .catch((error) => {
        alert("error");
      });
  }, [id]);

  return <div>employeeName is {name}</div>;
};

export default Employee;

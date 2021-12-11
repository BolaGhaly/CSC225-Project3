import React from "react";
import LoadingScreen from "./LoadingScreen";
import EmployeeCard from "./EmployeeCard";
import axios from "axios";
import { useState, useEffect } from "react";

const EmployeesCards = () => {
  const [loading, setLoading] = useState(false);
  const [employeesArr, setEmployeesArr] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    fetchEmployeesArr();
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const fetchEmployeesArr = async () => {
    setLoading(true);
    await axios
      .get("https://statenweb.mockable.io/employees")
      .then((response) => {
        setEmployeesArr(response.data);
      });
  };

  if (selectedEmployee) {
    return (
      <div>
        <EmployeeCard selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee}/>
      </div>
    );
  }
  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="employees-container animate__animated animate__fadeIn d-flex justify-content-center align-items-center">
          <div className="container-fluid w-80">
            <div className="row d-flex justify-content-center align-items-center text-center my-auto">
              {employeesArr.map(function (employee) {
                return (
                  <div className="cards-width cards-rows">
                    <div className="row">
                      <div className="col">
                        <div key={employee.id} className="card">
                          <div className="card-body">
                            <h5 className="card-title">{employee.name}</h5>
                            <p className="text-muted">{employee.department}</p>
                            <button
                              onClick={() => setSelectedEmployee(employee.id)}
                              className="btn btn-info shadow-none"
                            >
                              About Me!
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeesCards;

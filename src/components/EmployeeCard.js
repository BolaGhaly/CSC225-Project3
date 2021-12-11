import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingScreen from "../components/LoadingScreen";

const EmployeeCard = ({ selectedEmployee, setSelectedEmployee }) => {
  const [loading, setLoading] = useState(false);
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    fetchEmployeeData();
    setTimeout(() => setLoading(false), 2000);
  }, [selectedEmployee]);

  const fetchEmployeeData = async () => {
    setLoading(true);
    await axios
      .get(`https://statenweb.mockable.io/employee/${selectedEmployee}`)
      .then((response) => {
        setEmployeeData(response.data);
      });
  };

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="employee-container d-flex justify-content-center align-items-center p-md-3">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="card w-fitcontent p-2 mx-3">
                <div className="w-100 d-flex justify-content-center align-items-center">
                  <img
                    src={employeeData.photo}
                    className="card-img-top card-img"
                    alt="Picture of Employee"
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{employeeData.name}</h5>
                  <p className="text-muted">
                    Role: {employeeData.role}
                    <br />
                    Department: {employeeData.department}
                    <br />
                    Started on {employeeData.startDate}
                  </p>
                  <button
                    onClick={() => setSelectedEmployee(null)}
                    className="btn btn-primary shadow-none"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeCard;

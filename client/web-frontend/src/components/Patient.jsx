// components/Patient.jsx
import React from 'react';
import '../style/Patient.css';
import DropdownMenu from './DropdownMenu';
import PatientInfo from './PatientInfo';


const options = ['Not Reviewed', 'Referred', 'Reviewed'];
const patientName = 'Willy Wonka';
const mrn = '123456';

const handleAddToWatchlist = () => {
  console.log();
};

const Patient = () => {
  return (
    <div className="patient-content">
      <div className="patient-info">
        <div className="patient-status">
            <DropdownMenu options={options} />
        </div>
        <div className="patient-name">
            <PatientInfo name = "Willy Wonka" mrn = "123456" />
        </div>
        <div className="patient-alert">Alert Value</div>
        <div className="patient-time">4:00 AM 3/9/2024</div>
        <button className="patient-chart">Chart Value</button>
      </div>
    </div>
  );
};

export default Patient;
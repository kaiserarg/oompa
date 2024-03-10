import React from 'react';
import '../style/PatientInfo.css';
import Flag from '../assets/Subtract.svg'

const PatientInfo = ({ name, mrn }) => {
  return (
    <div style={{ width: '100%' }}>
      <div>
        <span>Name: {name}</span>
      </div>
      <div>
        <span>MRN: {mrn}</span>
      </div>
      <div>
        <button style={{ background: 'none', border: 'none', padding: 0 }}>
          <img src={Flag} alt="Button" />
          <span>Add to Watchlist</span>
        </button>
      </div>
    </div>
  );
};

export default PatientInfo;
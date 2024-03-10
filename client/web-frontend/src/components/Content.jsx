// components/Content.jsx
import React from 'react';
import '../style/Content.css';
import Sort from '../assets/sort.svg';
import Patient from './Patient';

const Content = () => {
  return (
    <div className="content">
      <div className="header-containers">
        <div className="status">
          Status
          <img src={Sort} alt="Sort Icon" className="sort-icon" />
        </div>
        <div className="patient">
          Patient
          <img src={Sort} alt="Sort Icon" className="sort-icon" />
        </div>
        <div className="alert">Alert</div>
        <div className="time-of-alert">Time of Alert</div>
        <div className="chart">Chart</div>
      </div>
      <Patient />
    </div>
  );
};

export default Content;
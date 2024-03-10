// components/Header.jsx
import React from 'react';
import '../style/Header.css';

const Header = ({ patientAlertCount }) => {
  return (
    <header className="header">
      <h1 className="header-title">Patient Dashboard</h1>
    </header>
  );
};

export default Header;
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PatientDataManager {
    struct Patient {
        uint256 id;
        bytes32 dataHash;
        address doctor;
        address[] authorizedUsers;
    }

    mapping(uint256 => Patient) public patients;
    uint256 public patientCount;

    event PatientCreated(uint256 indexed patientId, bytes32 dataHash, address indexed doctor);
    event PatientDataUpdated(uint256 indexed patientId, bytes32 newDataHash);
    event AccessGranted(uint256 indexed patientId, address indexed user);
    event AccessRevoked(uint256 indexed patientId, address indexed user);

    function createPatient(bytes32 _dataHash) external {
        patientCount++;
        patients[patientCount] = Patient(patientCount, _dataHash, msg.sender, new address[](0));
        emit PatientCreated(patientCount, _dataHash, msg.sender);
    }

    function updatePatientData(uint256 _patientId, bytes32 _newDataHash) external {
        require(msg.sender == patients[_patientId].doctor, "Only the assigned doctor can update patient data.");
        patients[_patientId].dataHash = _newDataHash;
        emit PatientDataUpdated(_patientId, _newDataHash);
    }

    function grantAccess(uint256 _patientId, address _user) external {
        require(msg.sender == patients[_patientId].doctor, "Only the assigned doctor can grant access.");
        patients[_patientId].authorizedUsers.push(_user);
        emit AccessGranted(_patientId, _user);
    }

    function revokeAccess(uint256 _patientId, address _user) external {
        require(msg.sender == patients[_patientId].doctor, "Only the assigned doctor can revoke access.");
        for (uint256 i = 0; i < patients[_patientId].authorizedUsers.length; i++) {
            if (patients[_patientId].authorizedUsers[i] == _user) {
                patients[_patientId].authorizedUsers[i] = patients[_patientId].authorizedUsers[patients[_patientId].authorizedUsers.length - 1];
                patients[_patientId].authorizedUsers.pop();
                emit AccessRevoked(_patientId, _user);
                break;
            }
        }
    }

    function isAuthorized(uint256 _patientId, address _user) public view returns (bool) {
        if (msg.sender == patients[_patientId].doctor) {
            return true;
        }
        for (uint256 i = 0; i < patients[_patientId].authorizedUsers.length; i++) {
            if (patients[_patientId].authorizedUsers[i] == _user) {
                return true;
            }
        }
        return false;
    }
}
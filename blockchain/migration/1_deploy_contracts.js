const PatientDataManager = artifacts.require("PatientDataManager");

module.exports = function (deployer) {
  deployer.deploy(PatientDataManager);
};
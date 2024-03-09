var PatientDataManager = artifacts.require("./PatientDataManager.sol");

module.exports = function(deployer) {
  deployer.deploy(PatientDataManager);
};

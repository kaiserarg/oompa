const PatientDataManager = artifacts.require("PatientDataManager");

contract("PatientDataManager", (accounts) => {
  let patientDataManager;

  beforeEach(async () => {
    patientDataManager = await PatientDataManager.new();
  });

  it("should create a new patient", async () => {
    const dataHash = web3.utils.sha3("Patient data");

    await patientDataManager.createPatient(dataHash, { from: accounts[0] });

    const patientCount = await patientDataManager.patientCount();
    assert.equal(patientCount.toNumber(), 1, "Patient count should be 1");

    const patient = await patientDataManager.patients(1);
    assert.equal(patient.dataHash, dataHash, "Patient data hash should match");
    assert.equal(patient.doctor, accounts[0], "Doctor address should match");
  });

  // Add more test cases for other functions
});
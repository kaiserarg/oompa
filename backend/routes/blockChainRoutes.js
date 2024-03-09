
const express = require('express');
const EthCrypto = require('eth-crypto');
const ecies = require("eth-ecies");
const crypto = require('crypto');
const {Web3} = require('web3');
const fs = require('fs')

const algorithm = 'aes-256-cbc';

const router = express.Router();

let web3 = new Web3('http://localhost:7545');

const contractAddress = '0x53d3AF997dA912427509ad1EFF63562F6C1A0A1c'
const contractData = require('../PatientDataManager.json')

const abi = contractData.abi;

const contract = new web3.eth.Contract(abi, contractAddress);



router.post('/createTransaction', (req, res) => {
    const data = JSON.stringify(req.body.data);
    
    const hash = '0x' +  crypto.createHash('sha256').update(data).digest('hex');

    const privateKey = "482b3af2df55336a50c60bacb0e71ca74cac0bf4e17f28e2afbb7ca624e1c887"
    const publicKey = EthCrypto.publicKeyByPrivateKey(privateKey);

    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(data, 'utf-8', 'hex');
    encrypted += cipher.final('hex');

    const encryptedKey = encrypt(publicKey, key);
    const encryptedIv = encrypt(publicKey, iv);

    console.log("Encrypted IV: ", encryptedIv);
    console.log("Encrypted Key: ", encryptedKey);
    
    contract.methods.createPatient(hash)
        .send({from: '0xe0c22eB309843553E5C70623C35aa435C3991492',
                gas: 5000000
        })
        .then((receipt) => {
            console.log(receipt);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.post('/encryptData', (req, res) => {
    
    // encrypt the keys and iv with public key
})

function encrypt(publicKey, data) {
    let userPublicKey = Buffer.from(publicKey, 'hex');
    let bufferData = Buffer.from(data);

    let encryptedData = ecies.encrypt(userPublicKey, bufferData);

    return encryptedData.toString('base64')
}


function decrypt(privateKey, encryptedData) {
    let userPrivateKey = Buffer.from(privateKey, 'hex');
    let bufferEncryptedData = Buffer.from(encryptedData, 'base64');

    let decryptedData = ecies.decrypt(userPrivateKey, bufferEncryptedData);
    
    return decryptedData.toString('utf8');
}






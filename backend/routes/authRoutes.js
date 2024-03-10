const express = require('express')
const app = express()

const router = express.Router()

const Accounts = require('web3-eth-accounts');

const accounts = new Accounts(provider);
const provider = process.env.PROVIDER_URL;

router.post('/createUser', (req, res) => {
    const {username, password} = req.body;

    const account = accounts.create();

    const {address, privateKey, } = account;
})
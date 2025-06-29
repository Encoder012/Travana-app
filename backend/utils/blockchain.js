// backend/utils/blockchain.js
const { AptosClient, AptosAccount, TxnBuilderTypes, BCS, HexString } = require("aptos");
require("dotenv").config();

const NODE_URL = process.env.APTOS_NODE_URL || "https://fullnode.testnet.aptoslabs.com/v1";
const client = new AptosClient(NODE_URL);
const CONTRACT_ADDRESS = "0x3a08f1d42705d5ef28cf02126c9e7c3614f73d7c5a932226e8f01dc1c0aa5e54";

const RIDE_MANAGER_MODULE = `${CONTRACT_ADDRESS}::RideManager`;

// Removed encodeLocationToGeohash because geohashing is now done in frontend

const loadAccount = (privateKeyHex) => {
    const privateKey = new HexString(privateKeyHex).toUint8Array();
    return AptosAccount.fromAptosAccountObject({ privateKeyHex });
};

const lockFunds = async (wallet, amount, rideId) => {
    const riderPrivateKey = process.env.RIDER_PRIVATE_KEY;
    const driverAddress = wallet;
    const account = loadAccount(riderPrivateKey);

    const payload = {
        type: "entry_function_payload",
        function: `${RIDE_MANAGER_MODULE}::lock_funds`,
        type_arguments: [],
        arguments: [driverAddress, amount.toString()],
    };

    const txnRequest = await client.generateTransaction(account.address(), payload);
    const signedTxn = await client.signTransaction(account, txnRequest);
    const response = await client.submitTransaction(signedTxn);
    await client.waitForTransaction(response.hash);
    return response.hash;
};

const releaseFunds = async (rideId) => {
    const userPrivateKey = process.env.CONFIRM_PRIVATE_KEY;
    const account = loadAccount(userPrivateKey);

    const payload = {
        type: "entry_function_payload",
        function: `${RIDE_MANAGER_MODULE}::confirm_ride`,
        type_arguments: [],
        arguments: [rideId.toString()],
    };

    const txnRequest = await client.generateTransaction(account.address(), payload);
    const signedTxn = await client.signTransaction(account, txnRequest);
    const response = await client.submitTransaction(signedTxn);
    await client.waitForTransaction(response.hash);
    return response.hash;
};

const mintNFT = async (ride) => {
    const userPrivateKey = process.env.RIDER_PRIVATE_KEY;
    const account = loadAccount(userPrivateKey);
    const name = `Ride #${ride._id}`;
    const description = `From ${ride.pickupZone} to ${ride.destinationZone}`;
    const uri = "https://ipfs.example.com/ride-nft";

    const payload = {
        type: "entry_function_payload",
        function: `${RIDE_MANAGER_MODULE}::mint_nft`,
        type_arguments: [],
        arguments: [
            Array.from(Buffer.from(name, "utf-8")),
            Array.from(Buffer.from(description, "utf-8")),
            Array.from(Buffer.from(uri, "utf-8"))
        ],
    };

    const txnRequest = await client.generateTransaction(account.address(), payload);
    const signedTxn = await client.signTransaction(account, txnRequest);
    const response = await client.submitTransaction(signedTxn);
    await client.waitForTransaction(response.hash);
    return response.hash;
};

module.exports = {
    lockFunds,
    releaseFunds,
    mintNFT
};;

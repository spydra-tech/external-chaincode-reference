const shim = require('fabric-shim');

class SimpleChaincode extends shim.ChaincodeInterface {
        async Init(stub) {
                // ... Init code
        }
        async Invoke(stub) {
                // ... Invoke code
        }
}

// Take config from runtime environment variables
const config = {
        CCType:  process.env.CHAINCODE_TYPE,
        CCID:    process.env.CORE_CHAINCODE_ID,
        Address: process.env.CHAINCODE_SERVER_ADDRESS
}

const server = shim.server(new SimpleChaincode(), {
        ccid: config.CCID,
        address: config.Address
});

server.start();
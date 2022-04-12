require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString()
const infuraId = fs.readFileSync(".infuraid").toString()

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
      accounts: [privateKey]
    },

    /*

    mainnet: {
      // Infura
      // url: `https://mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },
    */

    
    matic: {
      // Infura
      url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      //url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }

   
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};


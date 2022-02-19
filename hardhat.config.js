/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");
require('dotenv').config()


const AVALANCHE_TEST_PRIVATE_KEY = process.env.REACT_APP_AVALANCHE_PRIVATE_KEY;



const AVALANCHE_MAIN_PRIVATE_KEY = process.env.REACT_APP_AVALANCHE_PRIVATE_KEY;

//REACT_APP_AVALANCHE_PRIVATE_KEY = "1167c52ac93a7e5e7ac1f8b96f5295392fa0aeacfb308bbe469c595ba02499ff"
//REACT_APP_TESTNET_FUJI_PRIVATE_KEY = "1167c52ac93a7e5e7ac1f8b96f5295392fa0aeacfb308bbe469c595ba02499ff"


module.exports = {
  solidity: "0.8.12",
    networks: {
    avalancheTest: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [`0x${AVALANCHE_TEST_PRIVATE_KEY}`]
    },
    avalancheMain: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [`0x${AVALANCHE_MAIN_PRIVATE_KEY}`]
    }
 
  }
};

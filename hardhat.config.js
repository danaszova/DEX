/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");
require('dotenv').config()


const AVALANCHE_TEST_PRIVATE_KEY = process.env.REACT_APP_AVALANCHE_PRIVATE_KEY;
const AVALANCHE_MAIN_PRIVATE_KEY = process.env.REACT_APP_AVALANCHE_PRIVATE_KEY;




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

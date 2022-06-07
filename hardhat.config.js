require("dotenv").config();

require('hardhat-contract-sizer');
require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");
require('hardhat-gas-reporter');
require('hardhat-deploy');
require('hardhat-deploy-ethers');
require('./tasks');

function getMnemonic(networkName) {
  if (networkName) {
    const mnemonic = process.env['MNEMONIC_' + networkName.toUpperCase()]
    if (mnemonic && mnemonic !== '') {
      return mnemonic
    }
  }

  const mnemonic = process.env.MNEMONIC
  if (!mnemonic || mnemonic === '') {
    return 'test test test test test test test test test test test junk'
  }
  return mnemonic
}

function accounts(chainKey) {
  return { mnemonic: getMnemonic(chainKey) }
}
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  contractSizer: {
    alphaSort: false,
    runOnCompile: true,
    disambiguatePaths: false,
  },

  namedAccounts: {
    deployer: {
      default: 0,    // wallet address 0, of the mnemonic in .env
    }
  },

  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId: 4,
      accounts: accounts(),
    },
    'bsc-testnet': {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      chainId: 97,
      accounts: accounts(),
    },
    fuji: {
      url: `https://api.avax-test.network/ext/bc/C/rpc`,
      chainId: 43113,
      accounts: accounts(),
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      chainId: 80001,
      accounts: accounts(),
    },
    'arbitrum-rinkeby': {
      url: `https://rinkeby.arbitrum.io/rpc`,
      chainId: 421611,
      accounts: accounts(),
    },
    'optimism-kovan': {
      url: `https://kovan.optimism.io/`,
      chainId: 69,
      accounts: accounts(),
    },
    'fantom-testnet': {
      url: `https://rpc.testnet.fantom.network/`,
      chainId: 4002,
      accounts: accounts(),
    }
  }
};

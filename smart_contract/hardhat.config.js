// https://eth-ropsten.alchemyapi.io/v2/1yMc6KidwwdnsLOv-NUCH9ge_jnWYasn

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/1yMc6KidwwdnsLOv-NUCH9ge_jnWYasn',
      accounts: [
        'c11932123d43aa524f06b0885506a902e31c37c009dda684657347b3df775776',
      ],
    },
  },
};

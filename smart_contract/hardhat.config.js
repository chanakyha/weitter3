require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/63lj7e8QrrHSuPGUEa7jpHDhCujuasH1",
      accounts: [
        "d4ecb740450905d2b485431769532e0a8c665a8f7f2e5ff7f75f24882c18bd19",
      ],
    },
  },
};

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      gas: 6721975, // Use this for the latest version of Ganache
      gasPrice: 20000000000 // 20 gwei
    },
  },
  compilers: {
    solc: {
      version: "0.8.21",
    }
  },
  // ... rest of your config
};
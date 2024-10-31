const Voting = artifacts.require("Voting");

module.exports = function(deployer) {
  const proposalNames = ["Proposal 1", "Proposal 2", "Proposal 3"];
  deployer.deploy(Voting, proposalNames, { gas: 6721975 })
    .then(() => {
      console.log("Voting contract deployed successfully");
    })
    .catch((error) => {
      console.error("Error deploying Voting contract:", error);
    });
};
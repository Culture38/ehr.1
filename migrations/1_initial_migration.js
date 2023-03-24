var contract2 = artifacts.require("./contract2.sol");

module.exports = function(deployer) {
  deployer.deploy(contract2);
};

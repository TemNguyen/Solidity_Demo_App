var contractABI = [];
var contractAddress = '0xCB2ebb9cE533EA4c8c409a07C3d7829A65E4dbf7';
var contractABI = [];
var contractAddress = "0x1B61eE8525a79bc6103B996B048f71dE0905323f";
var web3 = new Web3('http://localhost:9545');

var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts()
.then(console.log);

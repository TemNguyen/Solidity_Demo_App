// var contractABI = [
//     {
//       "constant": true,
//       "inputs": [],
//       "name": "hello",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "payable": false,
//       "stateMutability": "pure",
//       "type": "function"
//     }
//   ];



// contract address 
// var contractAddress = "0x38deA59Da5dE67881e91A46af356fdd9E858F06f";
// var web3 = new Web3('http://localhost:9545');

// var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);
// var helloWorld = new web3.eth.Contract(contractABI, contractAddress);


// console.log(simpleSmartContract);

// web3.eth.getAccounts()
// .then(console.log);

// document.addEventListener('DOMContentLoaded', () => {
//     console.log("HelloWorldHear!");
//     helloWorld.methods.hello().call()
//     .then(result => {
//       document.getElementById('hello').innerHTML = result;
//     });
//   });
  


const Crud = {
  "contractName": "Crud",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "nextId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "users",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "create",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "read",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "update",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "destroy",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"create\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"destroy\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"nextId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"read\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"update\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"users\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"project:/contracts/Crud.sol\":\"Crud\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/Crud.sol\":{\"keccak256\":\"0x1cd65ae5d67248b9c023ea69a3c98553358bd84374974b4cf11abc67d2fbcba9\",\"urls\":[\"bzz-raw://20d5f7e0c1f48410d99c187a6d6541bd287bb3319f852483624f88f581dc3ed2\",\"dweb:/ipfs/QmZys33bmJ2quUruLyFwFP8vmLZqZ9BTAqYmmFXnEFatjn\"]}},\"version\":1}",
  "bytecode": "0x60806040526001805534801561001457600080fd5b506108c8806100246000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063365b98b21461006757806361b8ce8c146101155780639d11877014610133578063b6a46b3b14610161578063ed2e5a971461021c578063f745630f146102ca575b600080fd5b6100936004803603602081101561007d57600080fd5b810190808035906020019092919050505061038f565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156100d95780820151818401526020810190506100be565b50505050905090810190601f1680156101065780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b61011d610458565b6040518082815260200191505060405180910390f35b61015f6004803603602081101561014957600080fd5b810190808035906020019092919050505061045e565b005b61021a6004803603602081101561017757600080fd5b810190808035906020019064010000000081111561019457600080fd5b8201836020820111156101a657600080fd5b803590602001918460018302840111640100000000831117156101c857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506104a5565b005b6102486004803603602081101561023257600080fd5b8101908080359060200190929190505050610528565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561028e578082015181840152602081019050610273565b50505050905090810190601f1680156102bb5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b61038d600480360360408110156102e057600080fd5b81019080803590602001909291908035906020019064010000000081111561030757600080fd5b82018360208201111561031957600080fd5b8035906020019184600183028401116401000000008311171561033b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061061c565b005b6000818154811061039c57fe5b9060005260206000209060020201600091509050806000015490806001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561044e5780601f106104235761010080835404028352916020019161044e565b820191906000526020600020905b81548152906001019060200180831161043157829003601f168201915b5050505050905082565b60015481565b600061046982610661565b90506000818154811061047857fe5b906000526020600020906002020160008082016000905560018201600061049f9190610726565b50505050565b600060405180604001604052806001548152602001838152509080600181540180825580915050906001820390600052602060002090600202016000909192909190915060008201518160000155602082015181600101908051906020019061050f92919061076e565b5050505060016000815480929190600101919050555050565b60006060600061053784610661565b90506000818154811061054657fe5b9060005260206000209060020201600001546000828154811061056557fe5b9060005260206000209060020201600101808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561060b5780601f106105e05761010080835404028352916020019161060b565b820191906000526020600020905b8154815290600101906020018083116105ee57829003601f168201915b505050505090509250925050915091565b600061062783610661565b9050816000828154811061063757fe5b9060005260206000209060020201600101908051906020019061065b9291906107ee565b50505050565b600080600090505b6000805490508110156106b257826000828154811061068457fe5b90600052602060002090600202016000015414156106a55780915050610721565b8080600101915050610669565b506040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f5573657220646f6573206e6f742065786973742100000000000000000000000081525060200191505060405180910390fd5b919050565b50805460018160011615610100020316600290046000825580601f1061074c575061076b565b601f01602090049060005260206000209081019061076a919061086e565b5b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106107af57805160ff19168380011785556107dd565b828001600101855582156107dd579182015b828111156107dc5782518255916020019190600101906107c1565b5b5090506107ea919061086e565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061082f57805160ff191683800117855561085d565b8280016001018555821561085d579182015b8281111561085c578251825591602001919060010190610841565b5b50905061086a919061086e565b5090565b61089091905b8082111561088c576000816000905550600101610874565b5090565b9056fea265627a7a72315820998a427f607f71958eca55b31312aab9070d73cd2f8f779bbfdc4e23d799dc2764736f6c63430005100032",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100625760003560e01c8063365b98b21461006757806361b8ce8c146101155780639d11877014610133578063b6a46b3b14610161578063ed2e5a971461021c578063f745630f146102ca575b600080fd5b6100936004803603602081101561007d57600080fd5b810190808035906020019092919050505061038f565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156100d95780820151818401526020810190506100be565b50505050905090810190601f1680156101065780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b61011d610458565b6040518082815260200191505060405180910390f35b61015f6004803603602081101561014957600080fd5b810190808035906020019092919050505061045e565b005b61021a6004803603602081101561017757600080fd5b810190808035906020019064010000000081111561019457600080fd5b8201836020820111156101a657600080fd5b803590602001918460018302840111640100000000831117156101c857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506104a5565b005b6102486004803603602081101561023257600080fd5b8101908080359060200190929190505050610528565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561028e578082015181840152602081019050610273565b50505050905090810190601f1680156102bb5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b61038d600480360360408110156102e057600080fd5b81019080803590602001909291908035906020019064010000000081111561030757600080fd5b82018360208201111561031957600080fd5b8035906020019184600183028401116401000000008311171561033b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061061c565b005b6000818154811061039c57fe5b9060005260206000209060020201600091509050806000015490806001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561044e5780601f106104235761010080835404028352916020019161044e565b820191906000526020600020905b81548152906001019060200180831161043157829003601f168201915b5050505050905082565b60015481565b600061046982610661565b90506000818154811061047857fe5b906000526020600020906002020160008082016000905560018201600061049f9190610726565b50505050565b600060405180604001604052806001548152602001838152509080600181540180825580915050906001820390600052602060002090600202016000909192909190915060008201518160000155602082015181600101908051906020019061050f92919061076e565b5050505060016000815480929190600101919050555050565b60006060600061053784610661565b90506000818154811061054657fe5b9060005260206000209060020201600001546000828154811061056557fe5b9060005260206000209060020201600101808054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561060b5780601f106105e05761010080835404028352916020019161060b565b820191906000526020600020905b8154815290600101906020018083116105ee57829003601f168201915b505050505090509250925050915091565b600061062783610661565b9050816000828154811061063757fe5b9060005260206000209060020201600101908051906020019061065b9291906107ee565b50505050565b600080600090505b6000805490508110156106b257826000828154811061068457fe5b90600052602060002090600202016000015414156106a55780915050610721565b8080600101915050610669565b506040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f5573657220646f6573206e6f742065786973742100000000000000000000000081525060200191505060405180910390fd5b919050565b50805460018160011615610100020316600290046000825580601f1061074c575061076b565b601f01602090049060005260206000209081019061076a919061086e565b5b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106107af57805160ff19168380011785556107dd565b828001600101855582156107dd579182015b828111156107dc5782518255916020019190600101906107c1565b5b5090506107ea919061086e565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061082f57805160ff191683800117855561085d565b8280016001018555821561085d579182015b8281111561085c578251825591602001919060010190610841565b5b50905061086a919061086e565b5090565b61089091905b8082111561088c576000816000905550600101610874565b5090565b9056fea265627a7a72315820998a427f607f71958eca55b31312aab9070d73cd2f8f779bbfdc4e23d799dc2764736f6c63430005100032",
  "sourceMap": "27:791:1:-;;;145:1;124:22;;27:791;8:9:-1;5:2;;;30:1;27;20:12;5:2;27:791:1;;;;;;;",
  "deployedSourceMap": "27:791:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;27:791:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;100:19;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;100:19:1;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;100:19:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;124:22;;;:::i;:::-;;;;;;;;;;;;;;;;;;;516:85;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;516:85:1;;;;;;;;;;;;;;;;;:::i;:::-;;153:101;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;153:101:1;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;153:101:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;153:101:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;153:101:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;153:101:1;;;;;;;;;;;;;;;:::i;:::-;;260:135;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;260:135:1;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;260:135:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;401:109;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;401:109:1;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;401:109:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;401:109:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;401:109:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;401:109:1;;;;;;;;;;;;;;;:::i;:::-;;100:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;124:22::-;;;;:::o;516:85::-;556:6;565:8;570:2;565:4;:8::i;:::-;556:17;;587:5;593:1;587:8;;;;;;;;;;;;;;;;;;;580:15;;;;;;;;;;;;;;:::i;:::-;;;516:85;;:::o;153:101::-;203:5;214:18;;;;;;;;219:6;;214:18;;;;227:4;214:18;;;203:30;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;203:30:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;240:6;;:8;;;;;;;;;;;;;153:101;:::o;260:135::-;303:4;309:13;331:6;340:8;345:2;340:4;:8::i;:::-;331:17;;362:5;368:1;362:8;;;;;;;;;;;;;;;;;;:11;;;375:5;381:1;375:8;;;;;;;;;;;;;;;;;;:13;;355:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;260:135;;;:::o;401:109::-;460:6;469:8;474:2;469:4;:8::i;:::-;460:17;;500:4;484:5;490:1;484:8;;;;;;;;;;;;;;;;;;:13;;:20;;;;;;;;;;;;:::i;:::-;;401:109;;;:::o;607:206::-;652:4;669:6;678:1;669:10;;665:106;685:5;:12;;;;681:1;:16;665:106;;;731:2;716:5;722:1;716:8;;;;;;;;;;;;;;;;;;:11;;;:17;713:51;;;753:1;746:8;;;;;713:51;699:3;;;;;;;665:106;;;;777:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;607:206;;;;:::o;27:791::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.5.0;\r\n\r\ncontract Crud {\r\n  struct User {\r\n    uint id;\r\n    string name;\r\n  }\r\n  User[] public users;\r\n  uint public nextId = 1;\r\n\r\n  function create(string memory name) public {\r\n    users.push(User(nextId, name));\r\n    nextId++;\r\n  }\r\n\r\n  function read(uint id) view public returns(uint, string memory) {\r\n    uint i = find(id);\r\n    return(users[i].id, users[i].name);\r\n  }\r\n\r\n  function update(uint id, string memory name) public {\r\n    uint i = find(id);\r\n    users[i].name = name;\r\n  }\r\n\r\n  function destroy(uint id) public {\r\n    uint i = find(id);\r\n    delete users[i];\r\n  }\r\n\r\n  function find(uint id) view internal returns(uint) {\r\n    for(uint i = 0; i < users.length; i++) {\r\n      if(users[i].id == id) {\r\n        return i;\r\n      }\r\n    }\r\n    revert('User does not exist!');\r\n  }\r\n\r\n}\r\n",
  "sourcePath": "D:\\Lab\\solidity-helloworld\\contracts\\Crud.sol",
  "ast": {
    "absolutePath": "project:/contracts/Crud.sol",
    "exportedSymbols": {
      "Crud": [
        178
      ]
    },
    "id": 179,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 49,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 178,
        "linearizedBaseContracts": [
          178
        ],
        "name": "Crud",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "Crud.User",
            "id": 54,
            "members": [
              {
                "constant": false,
                "id": 51,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 54,
                "src": "65:7:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 50,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "65:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 53,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "scope": 54,
                "src": "79:11:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 52,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "79:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "User",
            "nodeType": "StructDefinition",
            "scope": 178,
            "src": "46:50:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 57,
            "name": "users",
            "nodeType": "VariableDeclaration",
            "scope": 178,
            "src": "100:19:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_User_$54_storage_$dyn_storage",
              "typeString": "struct Crud.User[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 55,
                "name": "User",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 54,
                "src": "100:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_User_$54_storage_ptr",
                  "typeString": "struct Crud.User"
                }
              },
              "id": 56,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "100:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_User_$54_storage_$dyn_storage_ptr",
                "typeString": "struct Crud.User[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 60,
            "name": "nextId",
            "nodeType": "VariableDeclaration",
            "scope": 178,
            "src": "124:22:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 58,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "124:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31",
              "id": 59,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "145:1:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "value": "1"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 77,
              "nodeType": "Block",
              "src": "196:58:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 69,
                            "name": "nextId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 60,
                            "src": "219:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 70,
                            "name": "name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62,
                            "src": "227:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "id": 68,
                          "name": "User",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 54,
                          "src": "214:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_User_$54_storage_ptr_$",
                            "typeString": "type(struct Crud.User storage pointer)"
                          }
                        },
                        "id": 71,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "214:18:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_User_$54_memory",
                          "typeString": "struct Crud.User memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_User_$54_memory",
                          "typeString": "struct Crud.User memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 65,
                        "name": "users",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57,
                        "src": "203:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_User_$54_storage_$dyn_storage",
                          "typeString": "struct Crud.User storage ref[] storage ref"
                        }
                      },
                      "id": 67,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "203:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_User_$54_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct Crud.User storage ref) returns (uint256)"
                      }
                    },
                    "id": 72,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "203:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 73,
                  "nodeType": "ExpressionStatement",
                  "src": "203:30:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 75,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "240:8:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 74,
                      "name": "nextId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60,
                      "src": "240:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 76,
                  "nodeType": "ExpressionStatement",
                  "src": "240:8:1"
                }
              ]
            },
            "documentation": null,
            "id": 78,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "create",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 63,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "169:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 61,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "169:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "168:20:1"
            },
            "returnParameters": {
              "id": 64,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "196:0:1"
            },
            "scope": 178,
            "src": "153:101:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 103,
              "nodeType": "Block",
              "src": "324:71:1",
              "statements": [
                {
                  "assignments": [
                    88
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 88,
                      "name": "i",
                      "nodeType": "VariableDeclaration",
                      "scope": 103,
                      "src": "331:6:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 87,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "331:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 92,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 90,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 80,
                        "src": "345:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 89,
                      "name": "find",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 177,
                      "src": "340:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 91,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "340:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "331:17:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 93,
                            "name": "users",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 57,
                            "src": "362:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_User_$54_storage_$dyn_storage",
                              "typeString": "struct Crud.User storage ref[] storage ref"
                            }
                          },
                          "id": 95,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 94,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 88,
                            "src": "368:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "362:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_User_$54_storage",
                            "typeString": "struct Crud.User storage ref"
                          }
                        },
                        "id": 96,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "id",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 51,
                        "src": "362:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 97,
                            "name": "users",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 57,
                            "src": "375:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_User_$54_storage_$dyn_storage",
                              "typeString": "struct Crud.User storage ref[] storage ref"
                            }
                          },
                          "id": 99,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 98,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 88,
                            "src": "381:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "375:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_User_$54_storage",
                            "typeString": "struct Crud.User storage ref"
                          }
                        },
                        "id": 100,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "name",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 53,
                        "src": "375:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      }
                    ],
                    "id": 101,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "361:28:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_string_storage_$",
                      "typeString": "tuple(uint256,string storage ref)"
                    }
                  },
                  "functionReturnParameters": 86,
                  "id": 102,
                  "nodeType": "Return",
                  "src": "355:34:1"
                }
              ]
            },
            "documentation": null,
            "id": 104,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "read",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 81,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 80,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 104,
                  "src": "274:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 79,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "274:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "273:9:1"
            },
            "returnParameters": {
              "id": 86,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 83,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 104,
                  "src": "303:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 82,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "303:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 85,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 104,
                  "src": "309:13:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 84,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "309:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "302:21:1"
            },
            "scope": 178,
            "src": "260:135:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 124,
              "nodeType": "Block",
              "src": "453:57:1",
              "statements": [
                {
                  "assignments": [
                    112
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 112,
                      "name": "i",
                      "nodeType": "VariableDeclaration",
                      "scope": 124,
                      "src": "460:6:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 111,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "460:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 116,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 114,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 106,
                        "src": "474:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 113,
                      "name": "find",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 177,
                      "src": "469:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 115,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "469:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "460:17:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 117,
                          "name": "users",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 57,
                          "src": "484:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_User_$54_storage_$dyn_storage",
                            "typeString": "struct Crud.User storage ref[] storage ref"
                          }
                        },
                        "id": 119,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 118,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 112,
                          "src": "490:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "484:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_User_$54_storage",
                          "typeString": "struct Crud.User storage ref"
                        }
                      },
                      "id": 120,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "name",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 53,
                      "src": "484:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 121,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 108,
                      "src": "500:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "484:20:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 123,
                  "nodeType": "ExpressionStatement",
                  "src": "484:20:1"
                }
              ]
            },
            "documentation": null,
            "id": 125,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "update",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 106,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 125,
                  "src": "417:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 105,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "417:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 108,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "scope": 125,
                  "src": "426:18:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 107,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "426:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "416:29:1"
            },
            "returnParameters": {
              "id": 110,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "453:0:1"
            },
            "scope": 178,
            "src": "401:109:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 141,
              "nodeType": "Block",
              "src": "549:52:1",
              "statements": [
                {
                  "assignments": [
                    131
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 131,
                      "name": "i",
                      "nodeType": "VariableDeclaration",
                      "scope": 141,
                      "src": "556:6:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 130,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "556:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 135,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 133,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 127,
                        "src": "570:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 132,
                      "name": "find",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 177,
                      "src": "565:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view returns (uint256)"
                      }
                    },
                    "id": 134,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "565:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "556:17:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 139,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "580:15:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 136,
                        "name": "users",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57,
                        "src": "587:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_User_$54_storage_$dyn_storage",
                          "typeString": "struct Crud.User storage ref[] storage ref"
                        }
                      },
                      "id": 138,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 137,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 131,
                        "src": "593:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "587:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_User_$54_storage",
                        "typeString": "struct Crud.User storage ref"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 140,
                  "nodeType": "ExpressionStatement",
                  "src": "580:15:1"
                }
              ]
            },
            "documentation": null,
            "id": 142,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 128,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 127,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 142,
                  "src": "533:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 126,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "533:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "532:9:1"
            },
            "returnParameters": {
              "id": 129,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "549:0:1"
            },
            "scope": 178,
            "src": "516:85:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 176,
              "nodeType": "Block",
              "src": "658:155:1",
              "statements": [
                {
                  "body": {
                    "id": 170,
                    "nodeType": "Block",
                    "src": "704:67:1",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 165,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 160,
                                "name": "users",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 57,
                                "src": "716:5:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_User_$54_storage_$dyn_storage",
                                  "typeString": "struct Crud.User storage ref[] storage ref"
                                }
                              },
                              "id": 162,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 161,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 150,
                                "src": "722:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "716:8:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_User_$54_storage",
                                "typeString": "struct Crud.User storage ref"
                              }
                            },
                            "id": 163,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "id",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 51,
                            "src": "716:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 164,
                            "name": "id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 144,
                            "src": "731:2:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "716:17:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 169,
                        "nodeType": "IfStatement",
                        "src": "713:51:1",
                        "trueBody": {
                          "id": 168,
                          "nodeType": "Block",
                          "src": "735:29:1",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 166,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 150,
                                "src": "753:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "functionReturnParameters": 148,
                              "id": 167,
                              "nodeType": "Return",
                              "src": "746:8:1"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 156,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 153,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 150,
                      "src": "681:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 154,
                        "name": "users",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 57,
                        "src": "685:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_User_$54_storage_$dyn_storage",
                          "typeString": "struct Crud.User storage ref[] storage ref"
                        }
                      },
                      "id": 155,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "685:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "681:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 171,
                  "initializationExpression": {
                    "assignments": [
                      150
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 150,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 171,
                        "src": "669:6:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 149,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "669:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 152,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 151,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "678:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "669:10:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 158,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "699:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 157,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 150,
                        "src": "699:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 159,
                    "nodeType": "ExpressionStatement",
                    "src": "699:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "665:106:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "5573657220646f6573206e6f7420657869737421",
                        "id": 173,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "784:22:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b1210388577d8c6712341b07f33667f2c6760b0b8a4bcc30a71add0928cf3a8c",
                          "typeString": "literal_string \"User does not exist!\""
                        },
                        "value": "User does not exist!"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_b1210388577d8c6712341b07f33667f2c6760b0b8a4bcc30a71add0928cf3a8c",
                          "typeString": "literal_string \"User does not exist!\""
                        }
                      ],
                      "id": 172,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        271,
                        272
                      ],
                      "referencedDeclaration": 272,
                      "src": "777:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory) pure"
                      }
                    },
                    "id": 174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "777:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 175,
                  "nodeType": "ExpressionStatement",
                  "src": "777:30:1"
                }
              ]
            },
            "documentation": null,
            "id": 177,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "find",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 145,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 144,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 177,
                  "src": "621:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 143,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "621:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "620:9:1"
            },
            "returnParameters": {
              "id": 148,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 147,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 177,
                  "src": "652:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 146,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "652:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "651:6:1"
            },
            "scope": 178,
            "src": "607:206:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 179,
        "src": "27:791:1"
      }
    ],
    "src": "0:820:1"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "project:/contracts/Crud.sol",
      "exportedSymbols": {
        "Crud": [
          178
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.5",
            ".0"
          ]
        },
        "id": 49,
        "name": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            178
          ],
          "name": "Crud",
          "scope": 179
        },
        "children": [
          {
            "attributes": {
              "canonicalName": "Crud.User",
              "name": "User",
              "scope": 178,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "id",
                  "scope": 54,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 50,
                    "name": "ElementaryTypeName",
                    "src": "65:4:1"
                  }
                ],
                "id": 51,
                "name": "VariableDeclaration",
                "src": "65:7:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "name",
                  "scope": 54,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "string",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 52,
                    "name": "ElementaryTypeName",
                    "src": "79:6:1"
                  }
                ],
                "id": 53,
                "name": "VariableDeclaration",
                "src": "79:11:1"
              }
            ],
            "id": 54,
            "name": "StructDefinition",
            "src": "46:50:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "users",
              "scope": 178,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "struct Crud.User[]",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "length": null,
                  "type": "struct Crud.User[]"
                },
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "User",
                      "referencedDeclaration": 54,
                      "type": "struct Crud.User"
                    },
                    "id": 55,
                    "name": "UserDefinedTypeName",
                    "src": "100:4:1"
                  }
                ],
                "id": 56,
                "name": "ArrayTypeName",
                "src": "100:6:1"
              }
            ],
            "id": 57,
            "name": "VariableDeclaration",
            "src": "100:19:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "nextId",
              "scope": 178,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 58,
                "name": "ElementaryTypeName",
                "src": "124:4:1"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "31",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 1",
                  "value": "1"
                },
                "id": 59,
                "name": "Literal",
                "src": "145:1:1"
              }
            ],
            "id": 60,
            "name": "VariableDeclaration",
            "src": "124:22:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "create",
              "scope": 178,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "name",
                      "scope": 78,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 61,
                        "name": "ElementaryTypeName",
                        "src": "169:6:1"
                      }
                    ],
                    "id": 62,
                    "name": "VariableDeclaration",
                    "src": "169:18:1"
                  }
                ],
                "id": 63,
                "name": "ParameterList",
                "src": "168:20:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 64,
                "name": "ParameterList",
                "src": "196:0:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_User_$54_memory",
                                  "typeString": "struct Crud.User memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (struct Crud.User storage ref) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 57,
                                  "type": "struct Crud.User storage ref[] storage ref",
                                  "value": "users"
                                },
                                "id": 65,
                                "name": "Identifier",
                                "src": "203:5:1"
                              }
                            ],
                            "id": 67,
                            "name": "MemberAccess",
                            "src": "203:10:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": true,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "struct Crud.User memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 54,
                                  "type": "type(struct Crud.User storage pointer)",
                                  "value": "User"
                                },
                                "id": 68,
                                "name": "Identifier",
                                "src": "214:4:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 60,
                                  "type": "uint256",
                                  "value": "nextId"
                                },
                                "id": 69,
                                "name": "Identifier",
                                "src": "219:6:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 62,
                                  "type": "string memory",
                                  "value": "name"
                                },
                                "id": 70,
                                "name": "Identifier",
                                "src": "227:4:1"
                              }
                            ],
                            "id": 71,
                            "name": "FunctionCall",
                            "src": "214:18:1"
                          }
                        ],
                        "id": 72,
                        "name": "FunctionCall",
                        "src": "203:30:1"
                      }
                    ],
                    "id": 73,
                    "name": "ExpressionStatement",
                    "src": "203:30:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "++",
                          "prefix": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 60,
                              "type": "uint256",
                              "value": "nextId"
                            },
                            "id": 74,
                            "name": "Identifier",
                            "src": "240:6:1"
                          }
                        ],
                        "id": 75,
                        "name": "UnaryOperation",
                        "src": "240:8:1"
                      }
                    ],
                    "id": 76,
                    "name": "ExpressionStatement",
                    "src": "240:8:1"
                  }
                ],
                "id": 77,
                "name": "Block",
                "src": "196:58:1"
              }
            ],
            "id": 78,
            "name": "FunctionDefinition",
            "src": "153:101:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "read",
              "scope": 178,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "id",
                      "scope": 104,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 79,
                        "name": "ElementaryTypeName",
                        "src": "274:4:1"
                      }
                    ],
                    "id": 80,
                    "name": "VariableDeclaration",
                    "src": "274:7:1"
                  }
                ],
                "id": 81,
                "name": "ParameterList",
                "src": "273:9:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 104,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 82,
                        "name": "ElementaryTypeName",
                        "src": "303:4:1"
                      }
                    ],
                    "id": 83,
                    "name": "VariableDeclaration",
                    "src": "303:4:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 104,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 84,
                        "name": "ElementaryTypeName",
                        "src": "309:6:1"
                      }
                    ],
                    "id": 85,
                    "name": "VariableDeclaration",
                    "src": "309:13:1"
                  }
                ],
                "id": 86,
                "name": "ParameterList",
                "src": "302:21:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        88
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "i",
                          "scope": 103,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 87,
                            "name": "ElementaryTypeName",
                            "src": "331:4:1"
                          }
                        ],
                        "id": 88,
                        "name": "VariableDeclaration",
                        "src": "331:6:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 177,
                              "type": "function (uint256) view returns (uint256)",
                              "value": "find"
                            },
                            "id": 89,
                            "name": "Identifier",
                            "src": "340:4:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 80,
                              "type": "uint256",
                              "value": "id"
                            },
                            "id": 90,
                            "name": "Identifier",
                            "src": "345:2:1"
                          }
                        ],
                        "id": 91,
                        "name": "FunctionCall",
                        "src": "340:8:1"
                      }
                    ],
                    "id": 92,
                    "name": "VariableDeclarationStatement",
                    "src": "331:17:1"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 86
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "tuple(uint256,string storage ref)"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "id",
                              "referencedDeclaration": 51,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct Crud.User storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 57,
                                      "type": "struct Crud.User storage ref[] storage ref",
                                      "value": "users"
                                    },
                                    "id": 93,
                                    "name": "Identifier",
                                    "src": "362:5:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 88,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 94,
                                    "name": "Identifier",
                                    "src": "368:1:1"
                                  }
                                ],
                                "id": 95,
                                "name": "IndexAccess",
                                "src": "362:8:1"
                              }
                            ],
                            "id": 96,
                            "name": "MemberAccess",
                            "src": "362:11:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "name",
                              "referencedDeclaration": 53,
                              "type": "string storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct Crud.User storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 57,
                                      "type": "struct Crud.User storage ref[] storage ref",
                                      "value": "users"
                                    },
                                    "id": 97,
                                    "name": "Identifier",
                                    "src": "375:5:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 88,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 98,
                                    "name": "Identifier",
                                    "src": "381:1:1"
                                  }
                                ],
                                "id": 99,
                                "name": "IndexAccess",
                                "src": "375:8:1"
                              }
                            ],
                            "id": 100,
                            "name": "MemberAccess",
                            "src": "375:13:1"
                          }
                        ],
                        "id": 101,
                        "name": "TupleExpression",
                        "src": "361:28:1"
                      }
                    ],
                    "id": 102,
                    "name": "Return",
                    "src": "355:34:1"
                  }
                ],
                "id": 103,
                "name": "Block",
                "src": "324:71:1"
              }
            ],
            "id": 104,
            "name": "FunctionDefinition",
            "src": "260:135:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "update",
              "scope": 178,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "id",
                      "scope": 125,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 105,
                        "name": "ElementaryTypeName",
                        "src": "417:4:1"
                      }
                    ],
                    "id": 106,
                    "name": "VariableDeclaration",
                    "src": "417:7:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "name",
                      "scope": 125,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 107,
                        "name": "ElementaryTypeName",
                        "src": "426:6:1"
                      }
                    ],
                    "id": 108,
                    "name": "VariableDeclaration",
                    "src": "426:18:1"
                  }
                ],
                "id": 109,
                "name": "ParameterList",
                "src": "416:29:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 110,
                "name": "ParameterList",
                "src": "453:0:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        112
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "i",
                          "scope": 124,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 111,
                            "name": "ElementaryTypeName",
                            "src": "460:4:1"
                          }
                        ],
                        "id": 112,
                        "name": "VariableDeclaration",
                        "src": "460:6:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 177,
                              "type": "function (uint256) view returns (uint256)",
                              "value": "find"
                            },
                            "id": 113,
                            "name": "Identifier",
                            "src": "469:4:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 106,
                              "type": "uint256",
                              "value": "id"
                            },
                            "id": 114,
                            "name": "Identifier",
                            "src": "474:2:1"
                          }
                        ],
                        "id": 115,
                        "name": "FunctionCall",
                        "src": "469:8:1"
                      }
                    ],
                    "id": 116,
                    "name": "VariableDeclarationStatement",
                    "src": "460:17:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "member_name": "name",
                              "referencedDeclaration": 53,
                              "type": "string storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct Crud.User storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 57,
                                      "type": "struct Crud.User storage ref[] storage ref",
                                      "value": "users"
                                    },
                                    "id": 117,
                                    "name": "Identifier",
                                    "src": "484:5:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 112,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 118,
                                    "name": "Identifier",
                                    "src": "490:1:1"
                                  }
                                ],
                                "id": 119,
                                "name": "IndexAccess",
                                "src": "484:8:1"
                              }
                            ],
                            "id": 120,
                            "name": "MemberAccess",
                            "src": "484:13:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 108,
                              "type": "string memory",
                              "value": "name"
                            },
                            "id": 121,
                            "name": "Identifier",
                            "src": "500:4:1"
                          }
                        ],
                        "id": 122,
                        "name": "Assignment",
                        "src": "484:20:1"
                      }
                    ],
                    "id": 123,
                    "name": "ExpressionStatement",
                    "src": "484:20:1"
                  }
                ],
                "id": 124,
                "name": "Block",
                "src": "453:57:1"
              }
            ],
            "id": 125,
            "name": "FunctionDefinition",
            "src": "401:109:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "destroy",
              "scope": 178,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "id",
                      "scope": 142,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 126,
                        "name": "ElementaryTypeName",
                        "src": "533:4:1"
                      }
                    ],
                    "id": 127,
                    "name": "VariableDeclaration",
                    "src": "533:7:1"
                  }
                ],
                "id": 128,
                "name": "ParameterList",
                "src": "532:9:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 129,
                "name": "ParameterList",
                "src": "549:0:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        131
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "i",
                          "scope": 141,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 130,
                            "name": "ElementaryTypeName",
                            "src": "556:4:1"
                          }
                        ],
                        "id": 131,
                        "name": "VariableDeclaration",
                        "src": "556:6:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 177,
                              "type": "function (uint256) view returns (uint256)",
                              "value": "find"
                            },
                            "id": 132,
                            "name": "Identifier",
                            "src": "565:4:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 127,
                              "type": "uint256",
                              "value": "id"
                            },
                            "id": 133,
                            "name": "Identifier",
                            "src": "570:2:1"
                          }
                        ],
                        "id": 134,
                        "name": "FunctionCall",
                        "src": "565:8:1"
                      }
                    ],
                    "id": 135,
                    "name": "VariableDeclarationStatement",
                    "src": "556:17:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "delete",
                          "prefix": true,
                          "type": "tuple()"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct Crud.User storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 57,
                                  "type": "struct Crud.User storage ref[] storage ref",
                                  "value": "users"
                                },
                                "id": 136,
                                "name": "Identifier",
                                "src": "587:5:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 131,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 137,
                                "name": "Identifier",
                                "src": "593:1:1"
                              }
                            ],
                            "id": 138,
                            "name": "IndexAccess",
                            "src": "587:8:1"
                          }
                        ],
                        "id": 139,
                        "name": "UnaryOperation",
                        "src": "580:15:1"
                      }
                    ],
                    "id": 140,
                    "name": "ExpressionStatement",
                    "src": "580:15:1"
                  }
                ],
                "id": 141,
                "name": "Block",
                "src": "549:52:1"
              }
            ],
            "id": 142,
            "name": "FunctionDefinition",
            "src": "516:85:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "find",
              "scope": 178,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "id",
                      "scope": 177,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 143,
                        "name": "ElementaryTypeName",
                        "src": "621:4:1"
                      }
                    ],
                    "id": 144,
                    "name": "VariableDeclaration",
                    "src": "621:7:1"
                  }
                ],
                "id": 145,
                "name": "ParameterList",
                "src": "620:9:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 177,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 146,
                        "name": "ElementaryTypeName",
                        "src": "652:4:1"
                      }
                    ],
                    "id": 147,
                    "name": "VariableDeclaration",
                    "src": "652:4:1"
                  }
                ],
                "id": 148,
                "name": "ParameterList",
                "src": "651:6:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            150
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 171,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint256",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 149,
                                "name": "ElementaryTypeName",
                                "src": "669:4:1"
                              }
                            ],
                            "id": 150,
                            "name": "VariableDeclaration",
                            "src": "669:6:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 151,
                            "name": "Literal",
                            "src": "678:1:1"
                          }
                        ],
                        "id": 152,
                        "name": "VariableDeclarationStatement",
                        "src": "669:10:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 150,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 153,
                            "name": "Identifier",
                            "src": "681:1:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 57,
                                  "type": "struct Crud.User storage ref[] storage ref",
                                  "value": "users"
                                },
                                "id": 154,
                                "name": "Identifier",
                                "src": "685:5:1"
                              }
                            ],
                            "id": 155,
                            "name": "MemberAccess",
                            "src": "685:12:1"
                          }
                        ],
                        "id": 156,
                        "name": "BinaryOperation",
                        "src": "681:16:1"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 150,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 157,
                                "name": "Identifier",
                                "src": "699:1:1"
                              }
                            ],
                            "id": 158,
                            "name": "UnaryOperation",
                            "src": "699:3:1"
                          }
                        ],
                        "id": 159,
                        "name": "ExpressionStatement",
                        "src": "699:3:1"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "falseBody": null
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "id",
                                      "referencedDeclaration": 51,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct Crud.User storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 57,
                                              "type": "struct Crud.User storage ref[] storage ref",
                                              "value": "users"
                                            },
                                            "id": 160,
                                            "name": "Identifier",
                                            "src": "716:5:1"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 150,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 161,
                                            "name": "Identifier",
                                            "src": "722:1:1"
                                          }
                                        ],
                                        "id": 162,
                                        "name": "IndexAccess",
                                        "src": "716:8:1"
                                      }
                                    ],
                                    "id": 163,
                                    "name": "MemberAccess",
                                    "src": "716:11:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 144,
                                      "type": "uint256",
                                      "value": "id"
                                    },
                                    "id": 164,
                                    "name": "Identifier",
                                    "src": "731:2:1"
                                  }
                                ],
                                "id": 165,
                                "name": "BinaryOperation",
                                "src": "716:17:1"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "functionReturnParameters": 148
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 150,
                                          "type": "uint256",
                                          "value": "i"
                                        },
                                        "id": 166,
                                        "name": "Identifier",
                                        "src": "753:1:1"
                                      }
                                    ],
                                    "id": 167,
                                    "name": "Return",
                                    "src": "746:8:1"
                                  }
                                ],
                                "id": 168,
                                "name": "Block",
                                "src": "735:29:1"
                              }
                            ],
                            "id": 169,
                            "name": "IfStatement",
                            "src": "713:51:1"
                          }
                        ],
                        "id": 170,
                        "name": "Block",
                        "src": "704:67:1"
                      }
                    ],
                    "id": 171,
                    "name": "ForStatement",
                    "src": "665:106:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_b1210388577d8c6712341b07f33667f2c6760b0b8a4bcc30a71add0928cf3a8c",
                                  "typeString": "literal_string \"User does not exist!\""
                                }
                              ],
                              "overloadedDeclarations": [
                                271,
                                272
                              ],
                              "referencedDeclaration": 272,
                              "type": "function (string memory) pure",
                              "value": "revert"
                            },
                            "id": 172,
                            "name": "Identifier",
                            "src": "777:6:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "5573657220646f6573206e6f7420657869737421",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"User does not exist!\"",
                              "value": "User does not exist!"
                            },
                            "id": 173,
                            "name": "Literal",
                            "src": "784:22:1"
                          }
                        ],
                        "id": 174,
                        "name": "FunctionCall",
                        "src": "777:30:1"
                      }
                    ],
                    "id": 175,
                    "name": "ExpressionStatement",
                    "src": "777:30:1"
                  }
                ],
                "id": 176,
                "name": "Block",
                "src": "658:155:1"
              }
            ],
            "id": 177,
            "name": "FunctionDefinition",
            "src": "607:206:1"
          }
        ],
        "id": 178,
        "name": "ContractDefinition",
        "src": "27:791:1"
      }
    ],
    "id": 179,
    "name": "SourceUnit",
    "src": "0:820:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x75bC04D8B20956A896c26896FCf43203D09Ce7B6",
      "transactionHash": "0x1c95f297b9ba3ca95492bd393cfe2d717486bf8f4ffd8838b93aefd8e2ea95d6"
    }
  },
  "schemaVersion": "3.4.3",
  "updatedAt": "2021-08-25T06:15:45.307Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}

let web3;
let crud;




const initWeb3 = () => {
  return new Promise((resolve, reject) => {
    if(typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      window.ethereum.enable()
        .then(() => {
          resolve(
            new Web3(window.ethereum)
          );
        })
        .catch(e => {
          reject(e);
        });
      return;
    }
    if(typeof window.web3 !== 'undefined') {
      return resolve(
        new Web3(window.web3.currentProvider)
      );
    }
    resolve(new Web3('http://localhost:7545'));
  });
};

const initContract = () => {
  const deploymentKey = Object.keys(Crud.networks)[0];
  return new web3.eth.Contract(
    Crud.abi, 
    Crud
      .networks[deploymentKey]
      .address
  );
};

const initApp = () => {
  const $create = document.getElementById('create');
  const $createResult = document.getElementById('create-result');
  const $read = document.getElementById('read');
  const $readResult = document.getElementById('read-result');
  const $edit = document.getElementById('edit');
  const $editResult = document.getElementById('edit-result');
  const $delete = document.getElementById('delete');
  const $deleteResult = document.getElementById('delete-result');
  let accounts = [];

  web3.eth.getAccounts()
  .then(_accounts => {
    accounts = _accounts;
  });

  $create.addEventListener('submit', (e) => {
    e.preventDefault();    
    const name = e.target.elements[0].value;
    console.log("name = ", name);
    console.log("accounts[0] = ", accounts[0]);
    crud.methods.create(name).send({from: accounts[0]})
    .then(result => {
      $createResult.innerHTML = `New user ${name} successfully created`;
    })
    .catch(_e => {
      $createResult.innerHTML = `Ooops... there was an error while trying to create a new user...`;
    });
  });

  $read.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = e.target.elements[0].value;
    crud.methods.read(id).call()
    .then(result => {
      $readResult.innerHTML = `Id: ${result[0]} Name: ${result[1]}`;
    })
    .catch(_e => {
      $readResult.innerHTML = `Ooops... there was an error while trying to read user ${id}`;
    });
  });

  $edit.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = e.target.elements[0].value;
    const name = e.target.elements[1].value;
    crud.methods.update(id, name).send({from: accounts[0]})
    .then(result => {
      $editResult.innerHTML = `Changed name of user ${id} to ${name}`;
    })
    .catch(_e => {
      $editResult.innerHTML = `Ooops... there was an error while trying to update name of user ${id} to ${name}`;
    });
  });

  $delete.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = e.target.elements[0].value;
    crud.methods.destroy(id).send({from: accounts[0]})
    .then(result => {
      $deleteResult.innerHTML = `Deleted user ${id}`;
    })
    .catch(_e => {
      $deleteResult.innerHTML = `Ooops... there was an error while trying to delete iser ${id}`;
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initWeb3()
    .then(_web3 => {
      web3 = _web3;
      crud = initContract();
      initApp(); 
    })
    .catch(e => console.log(e.message));
});

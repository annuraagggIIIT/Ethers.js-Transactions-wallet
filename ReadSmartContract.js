const {ethers} = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/53ab78fae08d4898a950a00407788c53`);
const walletAddress="0x2b645821B32e9e78ED3fC0B93EbE193806cEE093";
const walletAbi  =[
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


const contractRead = async () => {
    const walletContract= await new ethers.Contract(walletAddress,walletAbi,provider);
    const Balacne = await walletContract.contractBalance();
    console.log("Contract Balance: ",Balacne.toString());
    const userBalance = await walletContract.accountBalance(`0xXXXXXa2dfFf12928C6dd06BdcBcD851da47742a9`);
    console.log("User Balance: ",userBalance.toString());
    const userBalanceInEther = ethers.utils.formatEther(userBalance);
    console.log("User Balance in Ethers: ",userBalanceInEther);
    const num = await walletContract.getValue();
    console.log("Num: ",num.toString());

}
contractRead();
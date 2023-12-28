const {ethers} = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/53ab78fae08d4898a950a00407788c53`);
const querry = async () => {
    const block = await provider.getBlockNumber();
    console.log(block);
    const balance = await provider.getBalance(`0xB9D7934878B5FB9610B3fE8A5e441e8fad7E293f`);
    console.log(balance.toString());
}
querry();
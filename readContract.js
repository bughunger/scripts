import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("https://rpc.ankr.com/eth");

const abi = [
  "function getPrice() view returns (uint256)"
];

const contract = new ethers.Contract("0xContractAddress", abi, provider);

async function main() {
    const price = await contract.getPrice();
    console.log("Price:", price.toString());
}

main();

import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("https://rpc.ankr.com/eth");

// ERC20 minimal ABI
const erc20Abi = [
    "function balanceOf(address) view returns (uint256)",
    "function decimals() view returns (uint8)"
];

const token = new ethers.Contract(
    "0x...ERC20_TOKEN_ADDRESS...",
    erc20Abi,
    provider
);

async function getERC20Balance(wallet) {
    const [balance, decimals] = await Promise.all([
        token.balanceOf(wallet),
        token.decimals()
    ]);

    console.log(
        "Token Balance:",
        Number(balance) / 10 ** decimals
    );
}

getERC20Balance("0xUserAddress...");

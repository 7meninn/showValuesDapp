const { ethers } = require("hardhat");
const artifacts = require("./artifacts/contracts/showValues.sol/showValues.json");
require("dotenv").config();

async function main()
{
    const provider = new ethers.JsonRpcProvider(process.env.TEST_RPC);
    const wallet = new ethers.Wallet(process.env.PRIV_KEY, provider);
    const contractFactory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);
    console.log("Trying to Deploy Your Contract ---->");
    const contract = await contractFactory.deploy();
    const deploymentReceipt = await contract.deploymentTransaction().wait(1);
    console.log(deploymentReceipt.contractAddress);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
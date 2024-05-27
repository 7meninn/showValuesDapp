const { Web3 } = require("hardhat");
const artifacts = require("./artifacts/contracts/showValues.sol/showValues.json");
require("dotenv").config();

async function main()
{
    const provider = new Web3(process.env.TEST_RPC);
    const account = provider.eth.accounts.wallet.add(process.env.PRIV_KEY);
    const showValuescont = new provider.eth.Contract(artifacts.abi);
    const depshowValues = showValuescont.deploy({data:artifacts.bytecode});
    const showValues = await depshowValues.send(
        {
            from:account[0].address
        }
    );
    console.log(showValues.options.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
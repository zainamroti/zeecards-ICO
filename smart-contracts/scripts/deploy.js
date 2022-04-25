const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { ZEE_CARDS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
    // Address of the Zee Cards NFT contract that you deployed in the previous module
    const zeeCardsNFTContract = ZEE_CARDS_NFT_CONTRACT_ADDRESS;

    /*
      A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
      so cryptoDevsTokenContract here is a factory for instances of our CryptoDevToken contract.
      */
    const zeeCardsTokenContract = await ethers.getContractFactory(
        "ZeeCardsToken"
    );

    // deploy the contract
    const deployedZeeCardsTokenContract = await zeeCardsTokenContract.deploy(
        zeeCardsNFTContract
    );

    // print the address of the deployed contract
    console.log(
        "Zee Cards Token Contract Address:",
        deployedZeeCardsTokenContract.address
    );
}

// Call the main function and catch if there is any error
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

import { ethers } from "hardhat";

async function main(){
    const VaultFactory = await ethers.getContractFactory("VaultFactory");
    const vaultFactory = await VaultFactory.deploy();

    await vaultFactory.deployed();

    console.log(`VaultFactory deployed to ${vaultFactory.address}`)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
}
)
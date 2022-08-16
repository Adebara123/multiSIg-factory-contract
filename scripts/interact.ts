require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";
// import * as dotenv from "dotenv";

//import IMultiSig from "../contracts/Imultisig.sol";

async function main() {

  const _value = ethers.utils.parseEther("1");

  const CONTRACTADDRESS = "0x6e828b59fc799b6ef92e42d2f39e438a7477f469";
  const MULTISIG = await ethers.getContractAt("Imultisig", CONTRACTADDRESS);

  //   console.log("contractBalanc", await MULTISIG.contractBalance());
  //console.log("")
  await MULTISIG.withdrawEther(_value);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
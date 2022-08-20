require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";
// import * as dotenv from "dotenv";

//import IMultiSig from "../contracts/Imultisig.sol";
const helpers = require("@nomicfoundation/hardhat-network-helpers");

async function main() {
  let provider = {
    PrivateKey: process.env.PRIVATE_KEY as BytesLike,
    URL: process.env.ROPSTEN_URL,
  };
  //const provider2 = ethers.getDefaultProvider("ropsten", provider.URL);
  //let wallet = new ethers.Wallet(provider.PrivateKey, provider2);
  const _value = ethers.utils.parseEther("1");

 
  const CONTRACTADDRESS = "0x6e828b59fc799b6ef92e42d2f39e438a7477f469";
  const MULTISIG = await ethers.getContractAt("Imultisig", CONTRACTADDRESS);

  
// const address = "0x1234567890123456789012345678901234567890";
      const add1 = "0x7A3E0DFf9B53fA0d3d1997903A48677399b22ce7";
      await helpers.impersonateAccount(add1);
      const impersonatedadd1 = await ethers.getSigner(add1);
      
      const add2 = "0x9ee15CF9EC4B3830bBedA501d85F5329Ea3C595C";
      await helpers.impersonateAccount(add2);
      const impersonatedadd2 = await ethers.getSigner(add2);
      
      const add3 = "0x9ee15CF9EC4B3830bBedA501d85F5329Ea3C595C";
      await helpers.impersonateAccount(add3);
      const impersonatedadd3 = await ethers.getSigner(add3);
      
      const add4 = "0x85f20a6924A61904AB44243C7e2c771B3bE46734";
      await helpers.impersonateAccount(add4);
      const impersonatedadd4 = await ethers.getSigner(add4);
      
      const add5 = "0x2DBdd859D9551b7d882e9f3801Dbb83b339bFFD7";
      await helpers.impersonateAccount(add5);
      const impersonatedadd5 = await ethers.getSigner(add5);
      
      const add6 = "0x88538EE7D25d41a0B823A7354Ea0f2F252AD0fAf";
      await helpers.impersonateAccount(add6);
      const impersonatedadd6 = await ethers.getSigner(add6);
      
      const add7 = "0xB632cAf3119860599ce162Fad8753fc4198037b4";
      await helpers.impersonateAccount(add7);
      const impersonatedadd7 = await ethers.getSigner(add7);
      
      const add8 = "0x20497F37a8169c8C9fA09411F8c2CFB7c90dE5d1"
      await helpers.impersonateAccount(add8);
      const impersonatedadd8 = await ethers.getSigner(add8);

  const withdraw = await MULTISIG.connect(impersonatedadd4).withdrawEther(_value);

  const approve1 = await MULTISIG.connect(impersonatedadd1).Approve(8);
  const approve2 = await MULTISIG.connect(impersonatedadd2).Approve(8);
  const approve3 = await MULTISIG.connect(impersonatedadd3).Approve(8);
  const approve4 = await MULTISIG.connect(impersonatedadd4).Approve(8);
  const approve5 = await MULTISIG.connect(impersonatedadd5).Approve(8);
  const approve6 = await MULTISIG.connect(impersonatedadd6).Approve(8);
  const approve7 = await MULTISIG.connect(impersonatedadd7).Approve(8);
 // const approve8 = await MULTISIG.connect(impersonatedadd8).Approve(8);

  //const bal = await MULTISIG.connect(impersonatedadd1).contractBalance();
  const bal1 = impersonatedadd8.getBalance();
  //console.log("the withdrawn", withdraw);
  console.log("the balance", bal1);
 
  //   await wallet.sendTransaction({ to: CONTRACTADDRESS, value: _value });
  //   console.log();
  //   console.log("contractBalanc", await MULTISIG.contractBalance());
  //console.log("")
  //await MULTISIG.withdrawEther(_value);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
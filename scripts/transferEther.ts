import { BytesLike } from "ethers";
 import { ethers } from "hardhat";

 async function main() {

  // code transfer ether into a contract if there is no transfer function 
 
     let provider = {
         PrivateKey: process.env.PRIVATE_KEY as BytesLike,
         URL: process.env.ROPSTEN_URL,
       };
  const CONTRACTADDRESS = "0x91b30D733c8A2082a319B006EE5FD460C2Ace439";
  const provider2 = ethers.getDefaultProvider("ropsten", provider.URL);
  let wallet = new ethers.Wallet(provider.PrivateKey, provider2);
  const _value = ethers.utils.parseEther("0.1");
   await wallet.sendTransaction({ to: CONTRACTADDRESS, value: _value });
 
  
   
 }
 
 
 main().catch((error) => {
   console.error(error);
   process.exitCode = 1;
 });
 
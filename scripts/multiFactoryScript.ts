import { ethers } from "hardhat";

async function main() {
  // const lockedAmount = ethers.utils.parseEther("1");
  // let valid1, valid2, valid3, valid4;
  let [valid1, valid2, valid3, valid4, valid5] = await ethers.getSigners();

  const MultisigFactory = await ethers.getContractFactory("MultiSigFactory");
  const multisigFactory = await MultisigFactory.deploy();

  await multisigFactory.deployed();

  console.log("our address", multisigFactory.address);

  // console.log(
  // "factory contract deployed to this address",
  // multisigFactory.address
  // );
  let cloned = await multisigFactory.cloneMultiSig([
    valid1.address,
    valid2.address,
    valid3.address,
    valid4.address,
    valid5.address,
  ]);

  //0x8aDB348e804BA72747E4B98DcE309AE830321D82

  // const clone2 = await multisigFactory
  // .connect(valid2)
  // .cloneMultiSig([
  // valid1.address,
  // valid2.address,
  // valid3.address,
  // valid4.address,
  // valid5.address,
  // ]);
  // const res = await (await cloned.wait()).events;
  // let data = (await res.wait());
  // let result = (await clone2.wait()).logs[0].topics.length;
  // let result1 = (await clone2.wait()).logs[0].topics[0];
  // let result2 = (await clone2.wait()).logs[0].topics[1];
  // let result3 = (await clone2.wait()).logs[0].topics[2];
  // // console.log("the result", res)
  // console.log("This is the data gotten", res);

  // console.log(result, "factory cloned successfully");
  // console.log("we are the logger", result1, result2, result3);

  // let _cloned = await multisigFactory.ClonedAddresses();
  // console.log("This is the cloned shit", _cloned);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

 interface Imultisig{

function withdrawEther(uint256 _amount) external;

function contractBalance() external view returns (uint256);

function Approve(uint256 id) external;
 }

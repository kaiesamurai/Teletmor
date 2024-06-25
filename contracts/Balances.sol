// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
  function balanceOf(address) external view returns (uint256);
}

contract Balances {

    struct Call {
        address token;
        address  account;
    }

    constructor(Call[] memory calls){

        uint256 len = calls.length;
        uint256[] memory returnData = new uint256[](len);

        for (uint256 i = 0; i < len; i++) {
            returnData[i] =  (calls[i].token == address(0))
                                ? (calls[i].account.balance)
                                : IERC20( calls[i].token).balanceOf( calls[i].account);
        }

        bytes memory data = abi.encode(returnData);
        
        assembly { return(add(data, 32), mload(data)) }
    }
}
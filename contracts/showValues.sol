// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract showValues {

    function showName() external pure returns (string memory)
    {
        string memory name = "Bimal Tyagi";
        return name;
    }

    function showUID() external pure returns (uint256)
    {
        uint256 num = 15995;
        return num;
    }

    function showPlatform() external pure returns (string memory)
    {
        string memory platform = "Metacrafters";
        return platform;
    }

}
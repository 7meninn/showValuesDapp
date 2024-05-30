// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract showValues {
    string name;
    uint256 uid;
    string platform;

    function setName(string memory _name) external {
        name = _name;
    }

    function setUID(uint256 _uid) external {
        uid = _uid;
    }

    function setPlatform(string memory _platform) external {
        platform = _platform;
    }

    function showName() external view returns (string memory)
    {
        return name;
    }

    function showUID() external view returns (uint256)
    {
        return uid;
    }

    function showPlatform() external view returns (string memory)
    {
        return platform;
    }

}
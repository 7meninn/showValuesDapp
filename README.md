# Smart Contract Values Display

Metacrafters ETH + AVAX Module - 2

## Description

This Project deploys a smart contract consisting of functions which store some values in the blockchain and functions which will be able to fetch those values from the blockchain state variables. All the interactions with the smart contract can be made using the front-end of the project.

## Getting Started

### Setting up the Project

* You are required to clone the repository onto your editor. By executing following command in terminal.
```
gh repo clone 7meninn/showValuesDapp
```
* Install all the required dependencies with the help of a package manager yarn.
```
yarn add -dev "<dependencies>"
```
* Dependencies include:-
* hardhat, web3, dotenv.
* Use commands to initialize the dependencies:-
```
yarn init -2
```
```
yarn hardhat init
```

### Executing Project

* First step is to compile the smart contract included with the project which can be done by the following command.
```
yarn hardhat compile
```
* Now, to start a fake blockchain on your local system consider the following command.
```
yarn hardhat node
```
* To deploy the contract to the chain we need to run the file deploy.js which can be executed when nodejs is installed on your machine.
```
node deploy.js
```
* Now, we can look at front-end by running the start.html file.

### Interacting with Front-end

* You just need to press the connect button and do note that your metamask should be on the same network as hardhat RPC-URL.
* After this your metamask will ask you to confirm the connection.
* When successfully connected we will be able to store/fetch the values in/from the live smart contract on blockchain.

## Help
You can reach out to the author through [email.](bimaltyagi333@gmail.com)

## Authors
Bimal Tyagi


## License

This project is licensed under the MIT License - see the LICENSE.md file for details

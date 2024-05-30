import { ethers } from './cdnethers.js';
import { abi, address } from "./constants.js"

let contract;
let started = 0;
const start = document.getElementById("cnct-bt");
start.addEventListener("click", async () => {
  if (typeof window.ethereum !== 'undefined') {
      try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          console.log("MetaMask connected:", window.ethereum);
          document.getElementById("cnct-bt").innerText = "Connected ☑️";
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = await provider.getSigner();
          contract = new ethers.Contract(address, abi, signer);
          console.log("Provider Made");
          started = 1;
      } catch (error) {
          console.error("MetaMask connection error:", error);
      }
  } else {
      console.error("MetaMask is not installed");
  }
});

const setName = document.getElementById("setname-btn");
setName.addEventListener("click", async () => {
    if (started == 1)
        {
            await contract.setName(document.getElementById("inpname").value);
        }
});

const showName = document.getElementById("name-btn");
showName.addEventListener("click", async () => {
    if (started == 1)
        {
            document.getElementById("name-p").innerText = "Name: " + await contract.showName();
        }
});

const setUID = document.getElementById("setuid-btn");
setUID.addEventListener("click", async () => {
    if (started == 1)
        {
            await contract.setUID(document.getElementById("inpuid").value);
        }
});

const showUID = document.getElementById("uid-btn");
showUID.addEventListener("click", async () => {
    if (started == 1)
        {
            document.getElementById("uid-p").innerText = "UID: " + await contract.showUID();
        }
});

const setPlat = document.getElementById("setplat-btn");
setPlat.addEventListener("click", async () => {
    if (started == 1)
        {
            await contract.setPlatform(document.getElementById("inpplat").value);
        }
});

const showPlat = document.getElementById("plat-btn");
showPlat.addEventListener("click", async () => {
    if (started == 1)
        {
            document.getElementById("platform-p").innerText = "Platform: " + await contract.showPlatform();
        }
});
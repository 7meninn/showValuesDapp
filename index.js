let showValues, started = 0;

async function start() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("MetaMask connected:", window.ethereum);
            document.getElementById("cnct-bt").innerText = "Connected ☑️";
            const provider = new Web3(window.ethereum);
            const address = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
            const ABI = [
                {
                  "inputs": [],
                  "name": "showName",
                  "outputs": [
                    {
                      "internalType": "string",
                      "name": "",
                      "type": "string"
                    }
                  ],
                  "stateMutability": "pure",
                  "type": "function"
                },
                {
                  "inputs": [],
                  "name": "showPlatform",
                  "outputs": [
                    {
                      "internalType": "string",
                      "name": "",
                      "type": "string"
                    }
                  ],
                  "stateMutability": "pure",
                  "type": "function"
                },
                {
                  "inputs": [],
                  "name": "showUID",
                  "outputs": [
                    {
                      "internalType": "uint256",
                      "name": "",
                      "type": "uint256"
                    }
                  ],
                  "stateMutability": "pure",
                  "type": "function"
                }
              ];
            showValues = new provider.eth.Contract(ABI, address);
            let val = await showValues.methods.showName().call();
            document.getElementById("name-p").innerText = "Name: " + val;
            val = await showValues.methods.showUID().call();
            document.getElementById("uid-p").innerText = "UID: " + val;
            val = await showValues.methods.showPlatform().call();
            document.getElementById("platform-p").innerText = "Platform: " + val;
        } catch (error) {
            console.error("MetaMask connection error:", error);
        }
    } else {
        console.error("MetaMask is not installed");
    }
}
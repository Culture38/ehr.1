 EHR.1 : BLOCKCHAIN FOR MEDICAL DATA SHARING
 Move to the project directory and open it in your terminal.
 Run `npm install` to install project dependencies.

Install IPFS 
Install  lite-server  `npm install -g lite-server`
Download Metamask and connect to ganache localhost.

Go to Ganache homepage and download. 
Set Hostname to 127.0.0.1 -lo
Set Port Number to 8545
Enable Automine
Enable Autogenerate HD Mnemonic

Fire up your terminal and run `ipfs init`
Then run 
    ```
  ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials '["true"]'
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "POST", "GET"]'

    ```  
Install Truffle using `npm install truffle -g`
Compile Contracts using `truffle compile`
  
Open new Terminal and deploy contracts using `truffle migrate`
Copy deployed contract address to http/main.js 

```js
// EHR.1/http/main.js
var agentContractAddress = '0x90E5afD93796C5d6d3e7B22c2fA438FfC801cC5e';
```
Connect metamask to localhost:8485
Click on import account
Start the IPFS using "ipfs daemon"
Open a new terminal window and navigate to project directory
Run `npm run ehr.1`.
Open `localhost:3000` on your browser.
 

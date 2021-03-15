import Web3 from 'web3';

let web3;
const NET_ID_CELO_TESTNET = 44787;

export default async function initWeb3(){
    if(window.web3){
      web3 = new Web3(window.web3.currentProvider);
      const netId = await web3.eth.net.getId();
      if (netId === NET_ID_CELO_TESTNET){
        // Is connect to celo testnet
        return web3;
      }
    }
    const provider = new Web3.providers.HttpProvider(
        "https://alfajores-forno.celo-testnet.org"
    );
    web3 = new Web3(provider);
    
    return web3;
}
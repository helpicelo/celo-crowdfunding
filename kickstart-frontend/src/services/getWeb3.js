import Web3 from 'web3';
import { Celo, NETWORKS, ERC20ABI } from "@dexfair/celo-web-signer"

const NET_ID_CELO_TESTNET = 44787;



const onChainChanged = (network) => {
  // do something
  console.log('onChainChanged')
}
const onAccountsChanged = (account) => {
  // do something
  console.log('onAccountsChanged')
}


const getWeb3 = () => {
  console.log('WEB3Load')
  return new Promise( async (resolve, reject) => {
    // window.addEventListener('load', function(){
      let web;
      const celo = new Celo(NETWORKS.Alfajores)

      if (window.celo && window.celo.isDesktop){
        console.log('HACER ALGO AQUI!!!')
        
        const support = await celo.getSupport();

        
        // if (support.celo){
        //   console.log('Soporta celo')
          
        //   const accounts = await celo.getAccounts();
        //   console.log(accounts[0]);
        // }

        console.log('antes web');
        web = new Web3(window.celo);
        

        console.log('web');
        console.log(web);
        // web.eth.net.getId().then(function(id){
        //   console.log('Cpmsp;e: ', id);

        // })

        const netId = await web.eth.net.getId();
        console.log('Net id ', netId)
        if (netId !== NET_ID_CELO_TESTNET){
          // Is connect to celo testnet
          alert('Change your wallet to CELO Testnet')
          reject(null);
          return;
        }


        try {
            // Request account access if needed
            console.log('window.celo:> ', window.celo)
            // await window.celo.enable();
            // const accounts = await window.celo.request({ method: 'eth_requestAccounts' });
            await celo.connectCelo(onAccountsChanged, onChainChanged); // for celo extension wallet
            // Acccounts now exposed
            resolve(web);
        } catch (error) {
            // User denied account access...
            alert('User has denied account access to Wallet')
        }
      } else if (window.web3) {
        console.log('Esto es horrible');
        web = new Web3(Web3.givenProvider || "ws://localhost:7545");
        resolve(web);
      } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        reject()
      }

    // });
  });
}

export default getWeb3;
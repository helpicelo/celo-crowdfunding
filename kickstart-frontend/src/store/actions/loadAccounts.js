import {LOAD_ACCOUNTS} from "../actionTypes";
import getWeb3 from "../../services/getWeb3";

export function loadAccounts(){
    return async function(dispatch){
      
      const web3Instance = await getWeb3();

      console.log('Devuelve: ', web3Instance);

      if (web3Instance === null  || web3Instance.eth === null) {
        alert('Not access to wallet')
        return
      }

      const accounts = await web3Instance.eth.getAccounts();

        dispatch({
            type: LOAD_ACCOUNTS,
            account: accounts[0]
        });
    }
}
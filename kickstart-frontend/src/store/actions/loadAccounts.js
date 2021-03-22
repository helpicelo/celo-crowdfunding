import React from 'react'
import {LOAD_ACCOUNTS} from "../actionTypes";
// import getWeb3 from "../../services/getWeb3";
// import { isMobile } from 'react-device-detect'
import { SUPPORTED_WALLETS } from '../../constants'
// import Option from './Option'


export function loadAccounts(){
    return async function(dispatch){
      
      const isCEW = window.celo && window.celo

      return Object.keys(SUPPORTED_WALLETS).map(key => {
        const option = SUPPORTED_WALLETS[key]
        
        // check for mobile options
        
        // overwrite injected when needed

        // return rest of options
      
        console.log(option)
      });
    }
}
      // 
      
      //   return (
      //       <Option
      //         id={`connect-${key}`}
      //         onClick={() => {
      //           option.connector === connector
      //             ? setWalletView(WALLET_VIEWS.ACCOUNT)
      //             : !option.href && tryActivation(option.connector)
      //         }}
      //         key={key}
      //         active={option.connector === connector}
      //         color={option.color}
      //         link={option.href}
      //         header={option.name}
      //         subheader={null} //use option.descriptio to bring back multi-line
      //         icon={require('../../assets/images/' + option.iconName)}
      //       />
      //     )
      // })

      // 
      // const web3Instance = await getWeb3();

      // console.log('Devuelve: ', web3Instance);

      // if (web3Instance === null  || web3Instance.eth === null) {
      //   alert('Not access to wallet')
      //   return
      // }

      // const accounts = await web3Instance.eth.getAccounts();

      //   dispatch({
      //       type: LOAD_ACCOUNTS,
      //       account: accounts[0]
      //
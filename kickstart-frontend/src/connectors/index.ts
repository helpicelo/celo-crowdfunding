import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@ubeswap/injected-connector'
import { NetworkConnector } from './NetworkConnector'
// import { ValoraConnector } from './valora/ValoraConnector'

// Network ID
export const NETWORK_CHAIN_ID = "44787"

export const network = new NetworkConnector({
  defaultChainId: parseInt(NETWORK_CHAIN_ID)
})

let networkLibrary: Web3Provider | undefined

export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? new Web3Provider(network.provider as any))
}

export const injected = new InjectedConnector({
  supportedChainIds: [parseInt(NETWORK_CHAIN_ID)]
})

// export const valora = new ValoraConnector({
//   defaultChainId: NETWORK_CHAIN_ID
// })

// const networkChainIDFromHostname: ChainId = window.location.hostname.includes('alfajores')
//   ? ChainId.ALFAJORES
//   : window.location.hostname.includes('baklava')
//   ? ChainId.BAKLAVA
//   : ChainId.MAINNET

// export const NETWORK_CHAIN_ID: ChainId = process.env.REACT_APP_CHAIN_ID
//   ? parseNetwork(parseInt(process.env.REACT_APP_CHAIN_ID))
//   : networkChainIDFromHostname

// console.log('Loading Ubeswap interface at', window.location.hostname, networkChainIDFromHostname, NETWORK_CHAIN_ID)

// export const network = new NetworkConnector({
//   defaultChainId: NETWORK_CHAIN_ID
// })

// let networkLibrary: Web3Provider | undefined
// export function getNetworkLibrary(): Web3Provider {
//   return (networkLibrary = networkLibrary ?? new Web3Provider(network.provider as any))
// }

// export const injected = new InjectedConnector({
//   supportedChainIds: [ChainId.ALFAJORES, ChainId.BAKLAVA, ChainId.MAINNET]
// })

// export const ledger = new LedgerConnector()

// export const valora = new ValoraConnector({
//   defaultChainId: NETWORK_CHAIN_ID
// })


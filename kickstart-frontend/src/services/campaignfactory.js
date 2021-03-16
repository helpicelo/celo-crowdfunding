import initWeb3 from "./web3";
import {abi} from "../build/CampaignFactory.json";


const CONTRACT_ID = process.env.REACT_APP_CONTRACT_ID || '0xCc1Ad34F122BB9E8f1f8A40e20018311B7767641';


export default async function factory(){
    const web3 = await initWeb3();
    let factory = await new web3.eth.Contract(
            abi,
            CONTRACT_ID,
        );
    return factory;
}
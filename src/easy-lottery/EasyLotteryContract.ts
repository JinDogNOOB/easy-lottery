import BigNumber from 'bignumber.js/bignumber'
import easyLotteryJson from './lib/abi/easyLottery.json';

import Web3 from 'web3';
import {Contract} from 'web3-eth-contract';


import {
    CONTRACT_ADDRS,
    SUBTRACT_GAS_LIMIT
} from './lib/constants';


export default class EasyLotteryContract{
    web3: Web3;
    easyLottery: Contract

    constructor(web3:Web3){
        this.web3 = web3;
        this.easyLottery = new web3.eth.Contract(JSON.parse(JSON.stringify(easyLotteryJson)), CONTRACT_ADDRS.EASY_LOTTERY[3]);
    }

    doPassNPay(){

    }
    draw(){

    }
    withdrawDevWei(){
        
    }

    
    getOwnerAddress(){
        return undefined;
    }
    getGameNumber(){
        return undefined;
    }
    getGatheredWei(){
        return undefined;
    }
    getStartBlockNumber(){
        return undefined;
    }
    getPurchasePeriod(){
        return undefined;
    }
    getDevWei(){
        return undefined;
    }

   



}



import BigNumber from 'bignumber.js'
import easyLotteryJson from './lib/abi/easyLottery.json';

import Web3 from 'web3';
import {Contract} from 'web3-eth-contract';


import {
    CONTRACT_ADDRS,
    SUBTRACT_GAS_LIMIT
} from './lib/constants';


export default class EasyLotteryContract{
    web3: Web3;
    easyLottery: Contract;
    address: string;
    
    constructor(web3:Web3, address: string){
        this.web3 = web3;
        this.easyLottery = new web3.eth.Contract(JSON.parse(JSON.stringify(easyLotteryJson)), CONTRACT_ADDRS.EASY_LOTTERY[3]);
        this.address = address;
    }

    /**
     * 응모
     */
    async passNumberNPay(number: number){
        let val:boolean = false;
        try{
            val = await this.easyLottery.methods.passNumberNPay(number).send({
                from: this.address,
                value: new BigNumber(1500000000000000)
            });
            val = true;
        }catch(e){
            console.log('Contract.passNumberNPay failure')
            console.log(e);
        }
        return val;
    }

    /**
     * 추첨
     */
    async draw(){
        let val:boolean = false;
        try{
            val = await this.easyLottery.methods.draw().send({from: this.address});
            val = true;
        }catch(e){
            console.log('Contract.draw failure');
            console.log(e);
        }
        return val;
    }

    /**
     * 개발비 수령
     */
    async withdrawDevWei(){
        let val:boolean = false;
        try{
            await this.easyLottery.methods.sendWeiToDev().send({from: this.address});
            val = true;
        }catch(e){
            console.log('Contract.withdrawDevWei failure')
            console.log(e);
        }
        return val;
    }


    // ################### simple getter
    async getGameNumber(){
        const val = await this.easyLottery.methods.GAME_NUMBER().call();
        return new BigNumber(val);
    }
    async getGatheredWei(){
        const val = await this.easyLottery.methods.GATHERED_WEI().call();
        return new BigNumber(val);
    }
    async getStartBlockNumber(){
        const val = await this.easyLottery.methods.START_BLOCK_NUMBER().call();
        return new BigNumber(val);
    }
    async getPurchasePeriod(){
        const val = await this.easyLottery.methods.PURCHASE_PERIOD().call();
        return new BigNumber(val);
    }
    async getDevWei(){
        const val = await this.easyLottery.methods.DEV_WEI().call();
        return new BigNumber(val);
    }

   



}



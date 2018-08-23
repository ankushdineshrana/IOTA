const IOTA=require('iota.lib.js');
const iota=new IOTA({provider:'https://nodes.testnet.iota.org'});
const seed='UJM9HCZFMEHZZB9B9SEVGNUUBLAQNQNLGCRE9LTPLDKVSIKGYVNLALYXWPVBCJANKTAQVQ9BHEZOSG9MD';

const sendToAddress='UWIMIZXWJOJMRBMRWEFBODAVECCXKTQQERHPUSJGGFJETVZMXUXNDRRCWSANWRKSVDQTSPBI9YNGGPTWDNEIUFTHXX';
const transaction=[
    {
        value:0,
        address:sendToAddress,
        tag:'HELLOWORLD'
    }
]
iota.api.sendTransfer(seed,3,9,transaction,(error,success)=>{
    if(error){
        console.log(error);
    }else{
        console.log(success);
    }
})
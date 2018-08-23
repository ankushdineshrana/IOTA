const IOTA = require('iota.lib.js')
const iota = new IOTA({ provider: 'https://nodes.testnet.iota.org:443' })
const seed = "FZAGCCDYNWJNWALIDYKQZYACSDVFNSSJRDTPJBWWKGSJMXLOHODDWQYAUI9WPHTIFRXOMLEHWCIPBJOFI";
const sendToAddress = "CZLPEYRJCYLNECOBU9EBTD9GGHIHNKXAJC9XTKU9DCGABDHHEMVDBRMSCRMRXAI9SBKEAIASITYB9AGSX9SFI9GUHA"

const remoteCurl = require('@iota/curl-remote')
remoteCurl(iota, `https://powbox.testnet.iota.org`, 500)

const transfers = 
[
    {
        value: 0,
        address: sendToAddress,
        message: "HELLOWORLD",
        tag: "IOTAFUNDAMENTALS"
    }
]

iota.api.sendTransfer(seed, 3, 9, transfers, (error, success) => 
{
    if (error) 
    {
        console.log(error)
    } else 
    {
        console.log(success);
    }
});

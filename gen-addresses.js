var keythereum = require("keythereum");
var ethUtil = require("ethereumjs-util");
var fs = require('fs');
var dateFormat = require('dateformat');

var arguments = process.argv.splice(2);
var generateNum = parseInt(arguments[0]) > 0 ? parseInt(arguments[0]) : 10;
var saveFileName = dateFormat(new Date(), "yyyymmddHHMMss");

for(var i=0;i<generateNum;i++){
    var dk=keythereum.create();
    var privateKey=dk.privateKey;
    var address=ethUtil.privateToAddress(privateKey);
    address=ethUtil.toChecksumAddress(address.toString("hex"));
    privateKey=privateKey.toString("hex");
    console.log(address+'|'+privateKey);
    fs.appendFile('./'+saveFileName+'_addresses_with_keys.txt',address+'|'+privateKey+"\n",'utf8',function(err) {
        if (err) {
            console.error(err);
        }
    });
    fs.appendFile('./'+saveFileName+'_addresses.txt',address+"\n",'utf8',function(err) {
        if (err) {
            console.error(err);
        }
    });
}

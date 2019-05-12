'use strict'
let fs = require('fs')


let filename = process.argv[3];
let texto;
let data;
let fileContents = fs.readFileSync(filename); 

let buff = Buffer.from(fileContents);

if(process.argv[2] ==  "decifra"){
	texto = buff.toString('ascii');
	
}else if(process.argv[2] == "cifra"){
	texto = buff.toString('base64');
	
}else{
	
	console.log("erro\r\n");
}

console.log(fileContents + "\r\n" + texto)
const fs = require('fs');
const path = require('path');
const {stdin, stdout} = process;
const readline = require('readline');
const filePath = path.join(__dirname, 'text.txt');
fs.createWriteStream(filePath);
stdout.write('Hello, write text!\n');

  

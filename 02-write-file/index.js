const fs = require('fs');
const path = require('path');
const {stdin, stdout} = process;
const filePath = path.join(__dirname, 'file.txt');
const wrstr = fs.createWriteStream(filePath);

stdout.write('Hello, write text!\n');

stdin.on('data', data => {
    if (data.toString().trim() === 'exit') {
        stdout.write('Good luck!');
        process.exit();
    }
    wrstr.write(data);
});

process.on('SIGINT', () => {
    stdout.write('Good luck!');
    process.exit();
});
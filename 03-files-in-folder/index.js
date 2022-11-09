const  fs = require('fs');
const path = require('path');
fs.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes : true}, (err, files) => {
    if (err)
        console.log(err);
    else {
        for (let i of files) {
            if (i.isFile()) {
                fs.stat(path.join(__dirname, `secret-folder/${i.name}`), (err, stat) => {
                    if (stat) {
                        let name = i.name.split('.')[0];
                        let ext = path.extname(i.name);
                        let size = (stat.size / 1024).toFixed(2);
                        console.log(`${name} - ${ext} - ${size}kb`);
                    } else if (err) {
                        console.error(err);
                        return;
                    }

                });
            }
        }
    }
});
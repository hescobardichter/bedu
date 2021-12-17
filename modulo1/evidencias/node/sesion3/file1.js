const path = require('path');
const fs = require('fs');

const file = 'hola.txt';

fs.writeFile(file, 'Hola mundo, mundito, mundote', { encoding : 'utf8' }, (err) => {
    if(err){
        throw err;
    }
    console.log('Agregado sin problema');
    return;
});


fs.readFile(file, { encoding : 'utf8' }, (err, data) => {
    if(err){
        throw err;
    }
    console.log(data);
    return;
});

fs.appendFile(path.join(__dirname, file), '\nHola mundo, mundito, mundote', (err) => {
    if(err){
        throw err;
    }
    console.log('Finalizado');
    return;
});
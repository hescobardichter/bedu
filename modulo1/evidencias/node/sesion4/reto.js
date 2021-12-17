
const https = require('https');
const getPeople = () => {
    return new Promise((resolve, reject) => {
        https.get('https://swapi.dev/api/people/', (resp) => {
            let data = '';
            resp.setEncoding('utf8');
            resp.on('data', (chunk) => data += chunk );
            resp.on('end', () => {
              const body = JSON.parse(data);
              if(!body || !body.results) {
                reject('No existe body o body result');
              }
              resolve(body.results);
            });
          }).on("error", (err) => {
            reject("Error: " + err.message)
          });
    });
}
const orderArray = async () => {
    try {
        const result = await getPeople();
        result.sort((a, b) => a.films.length - b.films.length);
        result.forEach((person) => { console.log('Persona --- cantidad films ', person.films.length); });
        result.sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? 1 : -1);
        console.log('--------------------------------------------------------------------------')
        result.forEach((person) => { console.log('Orden ---  nombre ', person.name); });
    }catch(err) {
         console.log(err) 
    }
}

orderArray();
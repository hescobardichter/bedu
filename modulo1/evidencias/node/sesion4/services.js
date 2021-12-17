const https = require('https');
const requestGet = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (resp) => {
            let data = '';
            resp.setEncoding('utf8');
            resp.on('data', (chunk) => data += chunk );
            resp.on('end', () => {
              const body = JSON.parse(data);
              if(!body) {
                reject('No existe body o body result');
              }
              resolve(body);
            });
          }).on("error", (err) => reject("Error: " + err.message));
    });
}

module.exports = {
    requestGet
};
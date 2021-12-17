const resta = (a, b , callback) => {
    callback("hola soy la resta");
    return a + b;
}

resta(4, 5, (g) =>  console.log(g));

const timerAfter = () => {
    console.log('Ocurrio Despues')
}


const timerBefore = () => {
    console.log('Ocurrio Anter')
}

const timer = ( ) => {
    let a = 1;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            a = 10;
            resolve(a);
        }, 3000);
    });
}


timer().then((res) => {
    timerBefore()
    console.log(res)
    timerAfter()
});
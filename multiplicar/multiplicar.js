
const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite) => {
    return new Promise( (resolve, reject) => {
        if( !Number(base) ) {
            reject('El valor dado no es un número buey..!!'.red);
            return;
        }
        let data = '';

        for(let i=1; i <= limite; i++) {
            data += `${i} X ${base} = ${base * i}\n`;
            console.log(`${i} X ${base} = ${base * i}`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) =>{
            if(err) reject (err);
            else
             resolve(`tabla-${base}.txt`);
        });
    })
};

let listarTabla = (base, limite) => {
    let list = ''
    console.log('============='.blue);
    console.log(`tabla del ${ base }`.blue);
    console.log('=============='.blue);
    for(let i=1;i <= limite; i++){
        list += `${i} X ${base} = ${base * i}\n`;
    }
    console.log(list);
}

module.exports = {
    crearArchivo,
    listarTabla
}


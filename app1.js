const fs = require('fs');

let base = 5;
let tabla = '';

for(let i=1; i<=10; i++){
    tabla += `${base} X ${i} = ${base * i}\n`;
 //console.log(base + 'X' + i + '=' + base * i );
 //console.log(`${base} X ${i} = ${base * i}`);
}

fs.writeFile(`tablas1/tabla-${base}.txt`, tabla, (err) => {
if (err) throw err;
console.log(`El archivo tabla-${base}.txt ha sido generado con exito`);
});
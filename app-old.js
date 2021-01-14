const http = require('http');


http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'aplicaction/json' });

        let salida = {
                nombre: 'Juan',
                edad: 23,
                url: req.url
            }
            //res.write('Hola mundo');
        res.write(JSON.stringify(salida));
        res.end();

    })
    .listen(8080);


console.log('Escuchando el puerto 8080');
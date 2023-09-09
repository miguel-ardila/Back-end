const http = require("http"); //modulo de http

const host = "localhost"; //anfitrion
const port = 3000; //puerto


//req = solicitudes
//res = resouestas
const server = http.createServer((req, res) => {
    const ruta = new URL(req.url,`http://${host}:${port}`);
    console.log(ruta);

    if (ruta.pathname === "/persona"){
        res.writeHead(200);
        res.write(JSON.stringify({nombre: ruta. "/persona"}));
    }else if (ruta.pathname === "/user"){
        res.writeHead(200);
        res.write(JSON.stringify("/user"));
    }


  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!\n");
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
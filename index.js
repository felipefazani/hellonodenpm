const http = require('http');

const { Form } = require('brazil-mocker');

let nome = Form.names.firstName.generate();
let sobren = Form.names.lastName.generate();


http.createServer((req,res) => {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	res.end('Oi, ' + nome + ' ' + sobren);
}).listen(3000);

console.log('O node esta rodando na porta 3000, para encerrar o serviço pressione Ctrl + C');
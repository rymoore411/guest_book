
const names = require('./names.js');
const http = require('http');
const qs = require('querystring');

const server = http.createServer((req, res)=>{

  if(req.method === 'GET'){
  res.write(`
  <html>
    <head></head>
    <body>
      <h1>People</h1>
      ${
        names.map(name => `<div>${name}</div>`).join('')
      }
      <form method='POST'>
        <input name='name'/>
        <button>MAKE PERSON!</button>
      </form>
  </html>

  `)
}

else{
  const data = [];
  req.on('data', (chunk) => {
    data.push(chunk);
  });

  // req.on('end', ()=> {
  //   const peeps = qs.parse(data.toString());
  //   names.push(peeps);

  // })

}

  res.end();

});

server.listen(3000);

console.log(names);

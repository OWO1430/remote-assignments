const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<html><body><h1>Hello, My Server!</h1></body></html>');
});

// located to /getData

app.get('/getData', (req, res) => {
  // res.send('<html><body><h1>This is the data page</h1></body></html>');
  const number = req.query.number;
  if(!number)
    res.send("Lack of Parameter")
  else if(isNaN(number) || !Number.isInteger(Number(number)))
    res.send("Wrong Parameter")
  else{
    let num = parseInt(number)
    res.send(`${num*(num+1)/2}`)
  }
});

//located to /data
app.get('/data', (req, res) => {
  // res.send('<html><body><h1>This is the data page</h1></body></html>');
  const number = req.query.number;
  if(!number)
    res.send("Lack of Parameter")
  else if(isNaN(number) || !Number.isInteger(Number(number)))
    res.send("Wrong Parameter")
  else{
    let num = parseInt(number)
    res.send(`${num*(num+1)/2}`)
  }
});

app.listen(port, () => {
  console.log(`Ready.`);
});
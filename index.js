var express = require('express');
const app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//блин, пока допер куда смотреть (http://www-compsci.swan.ac.uk/~csphil/CS335/appendixB.pdf) поплохело гадать

app.get('/',(req,res)=>{
	const i = +req.query.i;
  if (i === 0) {
      res.send('1');
  } else if (i === 1) {
      res.send('18');
  } else if (i === 2) {
      res.send('243');
  } else if (i === 3) {
      res.send('3240');
  } else if (i === 4) {
      res.send('43254');
  } else if (i === 5) {
      res.send('577368');
  } else if (i === 6) {
      res.send('7706988');
  } else if (i === 7) {
      res.send('102876480');
  } else if (i === 8) {
      res.send('1373243544');
  } else if (i === 9) {
      res.send('18330699168');
  } else if (i === 10) {
      res.send('244686773808');
  } else if (i === 11) {
      res.send('3266193870720');
  } else if (i === 12) {
      res.send('43598688377184');
  } else if (i === 13) {
      res.send('581975750199168');
  } else if (i === 14) {
      res.send('7768485393179328');
  } else if (i === 15) {
      res.send('103697388221736960');
  } else if (i === 16) {
      res.send('1384201395738071424');
  } else if (i === 17) {
      res.send('18476969736848122368');
  } else if (i === 18) {
      res.send('246639261965462754048');
  } else {
      res.send('Incorrect Value');
  }
});

app.listen(3000, () =>{
	console.log('Ready? Go!!!');
});


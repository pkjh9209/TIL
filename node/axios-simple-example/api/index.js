import express from 'express'
import { dataArrayObject } from './data-object.js' //data
import cors from 'cors'

const app = express();

app.use(express.json()); // old version : bodyParser
app.use(cors()); //cors error solve : yarn install a cors

app.post('/connect',function(req,res){
  if(req.body.data === 'dataTest'){
    res.send(dataArrayObject);
  }else{
    res.send('실패');
  }
});

app.listen(3000);
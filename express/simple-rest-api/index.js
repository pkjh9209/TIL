import { dataArrayObject } from './data-object.js';
import express from 'express'

const app = express()

app.use(express.json()) // old version : bodyParser

app.get('/boards',function(req,res){
  res.send(dataArrayObject)
})

app.post('/boards',function(req,res){
  console.log(req)
  console.log('=====================')
  console.log(req.body)

  res.send('200 ok');
})


app.listen(3000)
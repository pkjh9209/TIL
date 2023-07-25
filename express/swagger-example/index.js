import express from 'express'

import { swaggerOptions } from './swagger-docs/config.js'
import { dataArrayObject } from './data-object.js' //data
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from'swagger-jsdoc';


const app = express();

app.use(express.json()); // old version : bodyParser
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerOptions))); // use swagger

//next: 다음 미들웨어로 넘어감
app.get('/boards',function(req,res){
  res.send(dataArrayObject);
})

app.post('/boards',function(req,res){
  console.log(req);
  console.log('=====================');
  console.log(req.body);

  res.send('200 ok');
})


app.listen(3000);
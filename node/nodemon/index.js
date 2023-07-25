import express from 'express'

const app = express()

app.get('/',function(req,res){
  res.send('Test nodemon')
})

app.listen(3000)
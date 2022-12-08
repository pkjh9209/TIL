const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');
const db = mysql.createConnection({
    user : 'root',
    host : 'localhost',
    password : '',
    database : 'co_debate',
})

db.connect(function(err) {
    if(err){ 
        throw err
    }else{;
        console.log('DB is Connected!')
    }
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
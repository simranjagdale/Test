const express = require('express')

const app = express()

const PORT = 8080

app.listen(PORT,()=>{
    console.log('server listen Port number'+' '+PORT)
})


app.get('/',function (req,res){
    res.send('hiiiiiiiiii ')
})
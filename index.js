const express = require('express')

const app = express()

const port = 8888
/
    app.use(express)

app.get('/',function (req,res){
  res.send(' hiii simran')

})


app.listen(port,function (err){
    if(!err){
        console.log(`server listen port Number ${port}`)
    }
})

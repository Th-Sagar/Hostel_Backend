const express = require('express');
const app =express();
const port =5000;
const cors = require('cors')
const registerRouter = require('./router/register-router')
const connectDb = require('./utils/db')

app.use(express.json())
app.use(cors())
app.use('/user',registerRouter)

connectDb().then(()=>{

    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`)
    })
})



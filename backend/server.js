import express from 'express'
import { connectDB } from './config/connectDB.js'
import productRouter from './router/productRouter.js'
import dotenv from 'dotenv'



dotenv.config()

const app = express()


app.use(express.json())

app.use('/api/products', productRouter )


app.listen(5000,  ()=>{
     connectDB();
    console.log(`The server is up at port number : ${process.env.PORT}`)
})


import express from 'express'
import { connectDB } from './config/connectDB.js'
import productRouter from './router/productRouter.js'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const app = express()


app.use(express.json())

app.use('/api/products', productRouter )

const __dirname = path.resolve()
if(process.env.NODE_ENV === 'production'){

    app.use(express.static(path.join(__dirname, '/frontend/dist')))

    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    })
}

app.listen(5000,  ()=>{
     connectDB();
    console.log(`The server is up at port number : ${process.env.PORT}`)
})


const express=require('express')
const connectDB=require('./db/connectDB')
const errorMiddleware=require('./middlewares/error')
const notFoundMiddleware=require('./middlewares/notFound')
require('dotenv').config()
require('express-async-errors')
const cors=require('cors')
const licenseRoute=require('./routes/licenseRoutes')
const app=express()


const start=async()=>{
    await connectDB(process.env.MONGO_URI)

    app.listen(process.env.PORT,console.log(`DB Connected and app Running on PORT ${process.env.PORT}`))


}

start()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api/license/',licenseRoute)
app.use(notFoundMiddleware)
app.use(errorMiddleware)





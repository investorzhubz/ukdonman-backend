const mongoose=require('mongoose')


const connectDB=(uri)=>{
   mongoose.connect(uri).then(()=>{
    console.log("Connected To DB")
   }).catch(error=>{
    console.log(`Error Occured ${error}`)
   })
}

module.exports=connectDB
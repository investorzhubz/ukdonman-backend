const mongoose=require('mongoose')

const licenseSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true

    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    drivingStatus:{
        type:String,
        required:true

    },
    validFrom:{
        type:Date,
        required:true
    },
    validTo:{
        type:Date,
        required:true

    },
    licenseNumber:{
        type:String,
        required:true
    },
    issueNumber:{
        type:Number,
        required:true
    }

},{timestamps:true})


const License=mongoose.model('license',licenseSchema)

module.exports=License;
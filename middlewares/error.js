const {StatusCodes}=require('http-status-codes')
const customAPIError=require("../customError/customApiError")
const error=(err,req,res,next)=>{
    if(err instanceof customAPIError){
        res.status(err.status).json({error:err.message})
    }
    console.log(err)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:"INTERNAL SERVER ERROR"})
}

module.exports=error
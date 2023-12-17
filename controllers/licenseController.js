const {StatusCodes}=require('http-status-codes')
const License = require('../model/licenseModel')
const customAPIError = require('../customError/customApiError')


const createLicense=async(req,res)=>{
 console.log(req.body.name)

    const {name,dateOfBirth,gender,address,drivingStatus,validFrom,validTo,licenseNumber,issueNumber}=req.body
    if(!name||!dateOfBirth||!gender||!address||!drivingStatus||!validFrom||!validTo||!licenseNumber||!issueNumber){
        throw new customAPIError("Enter all required Data",StatusCodes.BAD_REQUEST)
    }
    const licenceExists=await License.find({licenseNumber:licenseNumber})
  if(licenceExists.length>0){
    throw new customAPIError('License Number Already Exists',StatusCodes.BAD_REQUEST)
  }
    const license=await License.create(req.body)
    res.status(StatusCodes.CREATED).json(license)


}

const getLicense=async (req,res)=>{
    const {licenseNumber,insuranceNumber,postCode}=req.body
    console.log(licenseNumber)
  if(!licenseNumber){
    throw new customAPIError("Enter a License Number",StatusCodes.BAD_REQUEST)
  }
    const findLicense=await License.findOne({licenseNumber:licenseNumber})
    if(!findLicense){
        throw new customAPIError("License Not Found",StatusCodes.NOT_FOUND)
    }
    res.status(StatusCodes.OK).json(findLicense)
}

module.exports={createLicense,getLicense}
const express=require('express')
const router=express.Router()
const {createLicense,getLicense}=require('../controllers/licenseController')


router.route('/create').post(createLicense)
router.route('/get').post(getLicense)

module.exports=router


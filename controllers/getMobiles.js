const Mobile = require("../model/mobile")

const getMobiles = async (req, res, next) =>{
    try{
        const mobile = await Mobile.find()
        res.json({
            status:200,
            success:true,
            message:"mobiles fetched successfully",
            data:mobile
        })
    }
    catch(error){
        console.log(error)
        next(error)
    }
}

module.exports = getMobiles;
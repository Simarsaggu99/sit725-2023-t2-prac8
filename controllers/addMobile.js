const Mobile = require("../model/mobile")

const addMobile = async (req, res, next) =>{
    try{
        const mobile = new Mobile(req.body)
        await mobile.save()
        res.json({
            status:201,
            success:true,
            message:"mobile added successfully",
        })
    }
    catch(error){
        console.log(error)
        next(error)
    }
}

module.exports = addMobile;
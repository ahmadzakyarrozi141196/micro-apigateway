module.exports = (...roles) =>{
    return (req,res,next) =>{
        const role = req.user.data.role; //role dapat dari model user

        if(!roles.includes(role)){
            return res.status(405).json({
                status: 'error',
                message:'You dont Have Permission'
            })
        }
        return next();
    }
}
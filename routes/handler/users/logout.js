const apiAdapter = require('../../apiAdapter')

const {
    URL_SERVICE_USER,

} = process.env

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async(req,res)=>{
    try {
       
// return res.json(req.user); //isi req.user dari authorization localhost:3000/users
        const id = req.user.data.id;
        const user = await api.post(`/users/logout`, {user_id: id})
        return res.json(user.data)
        

    }
    catch(err){

        if (err.code === 'ECONNREFUSED'){
            return res.status(500).json({status: 'Error',message: 'Service Unavailable'})
        }
    const { status, data } = err.response

    return res.status(status).json(data)
    }
}
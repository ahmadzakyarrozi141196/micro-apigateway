const apiAdapter = require('../../apiAdapter')
const jwt = require('jsonwebtoken')
const {
    URL_SERVICE_USER,
    JWT_SECRET,
    JWT_SECRET_REFRESH_TOKEN,
    JWT_ACCESS_TOKEN_EXPIRED, 
    JWT_REFRESH_TOKEN

} = process.env

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async(req,res)=>{
    try {
        const user = await api.post('/users/login', req.body)
        const data = user.data.data; //ini mengambil user.data dari axios data

        const token = jwt.sign({
            data: data
        }, JWT_SECRET ,
        {expiresIn: JWT_ACCESS_TOKEN_EXPIRED}
        )
        
        const refreshtoken = jwt.sign({
            data: data
        }, JWT_SECRET_REFRESH_TOKEN ,
        {expiresIn: JWT_REFRESH_TOKEN}
        )

        await api.post('/refresh_tokens', {refresh_token: refreshtoken, user_id:data.id })

        return res.json({
            status: 'success',
            data: {
                token,
                refresh_token: refreshtoken
            }
        })

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
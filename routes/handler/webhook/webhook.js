const apiAdapter = require('../../apiAdapter')

const {
    URL_SERVICE_ORDER_PAYMENT,

} = process.env

const api = apiAdapter(URL_SERVICE_ORDER_PAYMENT);

module.exports = async(req,res)=>{
    try {
        const webhook= await api.post('/api/webhook', req.body)
        return res.json(webhook.data)
    }
    catch(err){

        //econnrefused tidak tersambung
        if (err.code === 'ECONNREFUSED'){
            return res.status(500).json({status: 'Error',message: 'Service Unavailable'})
        }
    const { status, data } = err.response

    return res.status(status).json(data)
    }
}


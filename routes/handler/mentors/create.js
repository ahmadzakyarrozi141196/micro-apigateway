const apiAdapter = require('../../apiAdapter')

const {
    URL_SERVICE_COURSE,

} = process.env

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async(req,res)=>{
    try {
        const mentors = await api.post('/api/mentors', req.body)
        return res.json(mentors.data)
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


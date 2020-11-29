const apiAdapter = require('../../apiAdapter')

const {
    URL_SERVICE_COURSE,

} = process.env

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async(req,res)=>{
    try {
        const id = req.params.id;
        const mentors = await api.put(`/api/mentors/${id}`, req.body)
        return res.json(mentors.data)
    }
    catch(err){

        if (err.code === 'ECONNREFUSED'){
            return res.status(500).json({status: 'Error', message: 'Service Unavailable'})
        }
    const { status, data} = err.response

    return res.status(status).json(data)
    }
}
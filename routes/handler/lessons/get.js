const apiAdapter = require('../../apiAdapter')

const {
    URL_SERVICE_COURSE,

} = process.env

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async(req,res)=>{
    try {
        const id = req.params.id
        const lessons = await api.get(`/api/lessons/${id}`)
        return res.json(lessons.data)
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


const apiAdapter = require('../../apiAdapter')

const {
    URL_SERVICE_COURSE,

} = process.env

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async(req,res)=>{
    try {
        const id = req.params.id;
        const courses = await api.put(`/api/courses/${id}`, req.body)
        return res.json(courses.data)
    }
    catch(err){

        if (err.code === 'ECONNREFUSED'){
            return res.status(500).json({status: 'Error', message: 'Service Unavailable'})
        }
    const { status, data} = err.response

    return res.status(status).json(data)
    }
}
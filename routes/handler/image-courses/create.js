const apiAdapter = require('../../apiAdapter')

const {
    URL_SERVICE_COURSE,

} = process.env

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async(req,res)=>{
    try {
        const imageCourses= await api.post('/api/image-courses', req.body)
        return res.json(imageCourses.data)
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


const apiAdapter = require('../../apiAdapter')

const {
    URL_SERVICE_COURSE,
    HOSTNAME

} = process.env

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async(req,res)=>{
    try {
        const courses = await api.get('/api/courses', {
            params: {
                ...req.params,
                status: 'published'
            }
        })

        const coursesData = courses.data;
        
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
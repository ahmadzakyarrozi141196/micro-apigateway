const apiAdapter = require('../../apiAdapter')

const {
    URL_SERVICE_COURSE,
    HOSTNAME

} = process.env

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async(req,res)=>{
    try {
        const chapters= await api.get('/api/chapters', {
            // params: {
            //     ...req.params,
            //     status: 'published'
            // }
        })

        
        
        return res.json(chapters.data)
        
    }
    catch(err){

        if (err.code === 'ECONNREFUSED'){
            return res.status(500).json({status: 'Error', message: 'Service Unavailable'})
        }
    const { status, data} = err.response

    return res.status(status).json(data)
    }
}
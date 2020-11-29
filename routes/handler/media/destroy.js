const apiAdapter = require('../../apiAdapter')

const {
    URL_SERVICE_MEDIA,

} = process.env

const api = apiAdapter(URL_SERVICE_MEDIA);

module.exports = async(req,res)=>{
    try {
        const id = req.params.id
        const media = await api.delete(`/media/${id}`)

        if(!media) {
            return res.status(404).json({status: 'error', message: 'Media Not Found'})
        }
        else {
            return res.status(200).json(media.data)
        }
        
    }
    catch(err){

        if (err.code === 'ECONNREFUSED'){
            return res.status(500).json({status: 'Error',message: 'Service Unavailable'})
        }
    const {status,data} = error.response

    return res.status(status).json(data)
    }
}
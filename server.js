require('dotenv').config()
const axios = require('axios')
const express = require('express')
const app = express()
const cors = require('cors')

const PORT = process.env.PORT

app.use(cors())


app.get('/astros', (req, res) => {
    axios.get(process.env.ASTRO_URL)
    .then(response=> {

        return response.data
    })
    .then(data=> {
        console.log(data)
        res.status(200).json(data)
    })
    .catch(err=> {
        console.error(err.message)
    })
})


app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`)
})
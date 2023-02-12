const express = require("express")

const router = express.Router()

router.get('/', (req, res, next)=> {
    res.send('sending in the response for get')
})

router.post('/', (req, res , next)=> {
    res.send('received a post request')
})

router.get('/:id', (req, res, next)=> {
    res.send(`received a get request ${id}`)
})


module.exports = router
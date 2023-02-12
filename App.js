const express =  require("express")
const ProductRoutes = require('./Routes/Products.route')

const app = express()
app.use('/product', ProductRoutes)

//route not found

app.use((req, res, next)=> {
    const error = new Error('Route not found')
    error.status = 401 
    next(error)
})

//err handler

app.use((err , req , res , next)=> {
    res.status(err.status || 500)
    res.send({
        status : err.status || 500,
        message : err.message
    })
})

app.listen(3000, ()=>{
     console.log('server started on port 3000....')
})

const express = require('express')

const app = express()
app.use(express.json())

const port = 3000

app.get("/v1/students", (request, response) => {
    response.status(200).json({
        message: "Hola Mundo"
    })
})

app.listen(port, () => {
    console.log(`Code Challenge is running in ${port}`)
})
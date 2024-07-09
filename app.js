var lodash = require('lodash')
const express = require('express')
const router = express.Router()
const app = express()
const fs = require('fs')

var admin_config = {}
var user_config = {}

app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())


app.post('/update', (request, response) => {
    lodash.merge(user_config, request.body)
    if(admin_config.flag_file != undefined && admin_config.flag_file == admin_config.flag_file.match(/[a-zA-Z.]+/g)) {
        const flag = fs.readFileSync("/" + admin_config.flag_file, 'utf8');
        response.send({"flag": flag, "response": "Config updated!"})
    } else {
        const flag = fs.readFileSync('/fake.txt', 'utf8');
        response.send({"flag": flag, "response": "Config updated!"})
    }
})


app.listen(6000, () => {
    console.log("Server started!")
})

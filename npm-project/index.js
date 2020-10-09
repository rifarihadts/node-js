const http = require('http')
const moment = require('moment')

const server = http.createServer((req, res) => {

    const currendDate = moment().format('LLLL')
    res.end(currendDate)
})

server.listen(3000)
console.log('Server is running at port 3000')


const http = require('http')

const server = http.createServer(function(req, res){
    res.end('Hi, Selamat Datang di nodejs')
})

server.listen(3000)
console.log('Server is running at port 3000')
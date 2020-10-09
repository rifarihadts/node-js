const http = require('http')

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type':'text/html'})
    res.write('Hi, Selamat Datang di <b> nodejs </b>')
    res.end()
})

server.listen(3000)
console.log('Server is running at port 3000')

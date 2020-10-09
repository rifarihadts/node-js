const http = require('http')

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write(JSON.stringify({success: true}))
    res.end()
})

server.listen(3000)
console.log('Server is running at port 3000')


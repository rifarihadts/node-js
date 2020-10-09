const http = require('http')
const url = require('url')

const server = http.createServer(function (req, res) {
    res.writeHead(200,{'content-type':'text/html'})
    const query = url.parse(req.url, true).query
    const response = 'Keyword: '+query.keyword
    res.write(response)
    res.end()
})

server.listen(3000)
console.log('Server is running at port 3000')


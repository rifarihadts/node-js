const http = require('http')

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type' : 'application/json'})
    switch (req.url) {
        case '/about':
            res.write('ini adalah halaman about')
            break;
        case '/produk':
            res.write('ini adalah halaman produk')
            break;
        case '/profile':
            res.write('ini adalah halaman profile')
            break;
        default:
            res.write('Halaman tidak ditemukan')
            break;
    }
    res.end()
})

server.listen(3000)
console.log('Server is running at port 3000')

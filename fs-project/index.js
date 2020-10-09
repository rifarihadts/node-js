const http = require('http')

const fs = require('fs')

const server = http.createServer((req, res) =>{
    fs.readFile('index.html',function (err,data) {
        res.writeHead(200, {'Content-Type':'text/html'})
        if(err)
        {
            console.log(err)
            res.write('Terjadi kesalahan pada server')
            res.end()
            return
        }

        //kirim response
        res.write(data)
        res.end()
    })
})

server.listen(3000)
console.log('Server is running at port 3000')


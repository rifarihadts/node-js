const fs = require('fs')

// fs.stat('textcoba.txt',(err, stats)=> {
//     if(err) {
//         console.log(err)
//     }

//     console.log(stats)
// })

fs.unlink('myText2.txt', (err) => {
    if(err)
    {
        return console.log(err)
    }

    console.log('Success')
})
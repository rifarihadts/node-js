const fs = require('fs')

fs.rename('myText.txt','textcoba.txt', (err) => {
    if(err)
    {
        return console.log(err)
    }

    console.log('Success')
})
const fs = require('fs')

fs.open('myText2.txt','w', (err,file) => {
    if(err)
    {
        return console.log(err)
    }

    console.log('Saved!')
})
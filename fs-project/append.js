const fs = require('fs')

fs.appendFile('myText.txt', "Hello world lagi terakhir ya \n", function(){
    console.log('Berhasil menulis file.')
})
//  COMMAND LINE INPUT FIRST
const fs = require('fs')
const inputData = process.argv.slice(2);

const http = require('http');

http.get(inputData[0], (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    fs.writeFile(inputData[1], data, err => {
      if (err) {
        console.error(err)
        return
      }
    })
  });
})
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });


//if file already exists, add the line below
// fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, err => { })


// fs.appendFile('file.log', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //done!
// })


// '/Users/home/lighthouse/w2/d3-net/page-fetcher/index.html'
// // > node fetcher.js http://www.example.edu/ ./index.html
// // Downloaded and saved 3261 bytes to ./index.html


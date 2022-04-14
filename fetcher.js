const request = require('request'); //pulls request function from downloaded files
const fs = require('fs'); //pulls FS function from built in methods
const args = process.argv.slice(2); //pulls from the terminal line without the 2 paths
const [URL, path] = args //pushes my values into the 2 variables
// const readline = require('readline');
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });


const fetcher = function(URL, path = "./output.txt") { //function takes in 2 arguments pulled with args
  request(URL, (error, response, body) => {
  console.log('Downloading...'); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  let writer = fs.createWriteStream(path); //creates an open file with values pushed into it
  writer.write(body)
  console.log(`Downloaded and saved ${body.length} to ${path}`)
  writer.end() //closes the file (better practice)
  process.exit() //exits the function
  });
};

fetcher(URL, path)
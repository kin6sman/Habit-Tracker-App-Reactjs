
// 1. Initilazing Express
const { response } = require('express');
const express = require('express');
const { request } = require('http');
const port = 8000;

// 7. Iniziraling Path
const path = require('path');

// 2. Creating Server
const server = express();

// 5. Initializing Ejs -- Setup up the VIEW ENGINE
server.set('view engine', 'ejs');

// 8. setting up path for the view folder
server.set('views', path.join(__dirname, './views'));


// 4. Express Method to get or Set requset to server
server.get('/', (req, res) => {
  console.log(req);
        // example of response --> return res.send('<h1>This is the home page of the application</h1>');

    // 9. 
    return res.render('home', {
      heading : "Home",
      demo : "Hey! Mayank this side RAHUL"
    }); 
})

//  10. routing to list 
server.get('/list', (request, response) => {

  return response.render('lists', {
    heading : "list",
    demo: "All is Well"
  })
})


// 3. checking if server is running or not 
server.listen(port, (err) => {
  if(err){
    console.log('Error: ' + err);
    return;
  }
  console.log(`Server is Running on express`);

});


//HTTP Methods/ Request

//Get 
//POST
//Put 
//Delete
//Patch
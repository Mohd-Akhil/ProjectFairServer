// import dotenv - to load environment variable
require('dotenv').config()

// import express
const express = require('express')

// import cors
const cors = require('cors')

// import router
const router = require('./routes')

// import connection.js
require('./connection')


// create express server
// creates an Express application. The express() function is a top-level function exported by the express module.
const pfServer = express()


// use of cors - to communicate with the view
pfServer.use(cors())


// use json() method - returns a middleware that can parse json format
pfServer.use(express.json())


//use router                 == the order is maintained to avoid crash - first it needs to be converted to do the logical operations
pfServer.use(router)

// to export upload folder from the sever side to use in the client side 
// fisrt argument - should be the name in which we are using the folder in the client side
// second argument - static method to export the folder
// static method should have the path of the export folder
pfServer.use('/uploads',express.static('./uploads'))


// set port for the server
PORT = 4000 || process.env.PORT


// listen to the port - to resolve the request
pfServer.listen(PORT,()=>{
    console.log(`server running successfully at port number: ${PORT}`);
})



    //JUST FOR TESTING
   //get request
   /* pfServer.get('/',(req,res)=>{
    //logic
    res.send('get request recieved')
    }) */
    
   //post request 
    /*  pfServer.post('/',(req,res)=>{
        //logic
        res.send('post request recieved')
    }) */

    //put request
    /* pfServer.put('/',(req,res)=>{
        //logic
        res.send('put request recieved')
    }) */
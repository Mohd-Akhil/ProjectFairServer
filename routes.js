// 1) import express
const express = require('express')

// import userController file
const userController = require('./controller/userController')

// import addProjectController
const projectController = require('./controller/projectController')

// import jwtmiddleware
const jwt = require('./middleware/jwtMidlleware')

const multerConfig = require('./middleware/multerMiddleware')


// 2) create an object for router class
const router = new express.Router()


// 3) set up path for each request from view

// register
router.post('/register',userController.registerController)

// login
router.post('/login',userController.loginController)

// add project
router.post('/addproject',jwt,multerConfig.single('projImage'),projectController.addProjectcontroller)

// all projects
router.get('/allprojects',jwt,projectController.getAllProjectController)

// home projects
router.get('/homeprojects',projectController.getHomeProjectsController)

// user projects
router.get('/userproject',jwt,projectController.userProjectController)

// delete project
router.delete('/delete/:id',projectController.deleteProjectController)

// edit project
router.put('/editproject/:id',jwt,multerConfig.single('projImage'),projectController.editProjectController)

// edit profile
router.put('/editprofile',jwt,multerConfig.single('profile'), userController.editProfileController)

// 4) export the router
module.exports = router
//STEP 3: 
const express = require('express')

// STEP 4: require Routers
const postsRouter = require('./posts/posts-router')

// STEP 5: set up server
const server = express();

// STEP 6: Middleware
server.use(express.json());
server.use('/api/posts', postsRouter)

// STEP 7: Catch-all endpoint
server.get('/', (req, res) => {
    res.send('Welcome to the General API')
})

// STEP 8: export
module.exports = server;
//STEP 1: Require server
const server = require('./api/server')

//STEP 2: 
server.listen(4000, () => {
    console.log('Server running on http://localhost:4000')
});
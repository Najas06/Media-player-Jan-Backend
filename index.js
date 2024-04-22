// 1) import json - server library 
const jsonServer = require('json-server')

// 2) create server using method inside json - server library 
const mediaPlayerServer = jsonServer.create()

// 3) create the path for db.json file - router()
const router = jsonServer.router('db.json')

// 4) create a middleware to convert json to js 
const middleware = jsonServer.defaults()

// 5) server should use router as well as middleware - use()
mediaPlayerServer.use(middleware)

mediaPlayerServer.use(router)

// 6) set a port to server 
const PORT = 4000 || process.env
// process.env - to select the port that is available when the 4000 is consumed or used.

// 7) run the server 
mediaPlayerServer.listen(PORT,()=>{
    console.log(`Server running successfullt at PORT ${PORT}`);
})
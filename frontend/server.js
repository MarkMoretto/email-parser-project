const http = require("http")
// const fs = require("fs")
// const path = require("path")

// https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
const HOST = process.env.HOST || "127.0.0.1"
const PORT = process.env.PORT || 3000



const server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-type":"text/plan"})
    response.end();  
})

server.listen(PORT, HOST, () => {
    console.log(`Server running on port ${PORT}`)
})


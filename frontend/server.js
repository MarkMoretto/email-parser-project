const http = require("http")
// const fs = require("fs")
// const path = require("path")

// https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
const HOST = process.env.HOST || "127.0.0.1"
const PORT = process.env.PORT || 3000



// http.createServer((req, res) => {
//     let filePath = "." + req.url
//     const contentType = "text/html"
//     if (filePath === "./")
//         filePath = "./index.html"

//     fs.readFile(filePath, function(error, content) {
//         if (error) {
//             if (error.code === "ENOENT") {
//                 console.error(error)
//                 res.end(content, "utf-8")

//                 // fs.readFile("./404.html", (error, content) => {
//                 //     res.writeHead(200, { "Content-Type": contentType })
//                 //     res.end(content, "utf-8")
//                 // })
//             }
//             else {
//                 res.writeHead(500)
//                 res.end(`Sorry, check with the site admin for error: ${error.code} ..\n`)
//                 res.end()
//             }
//         }
//         else {
//             res.writeHead(200, { "Content-Type": contentType })
//             res.end(content, "utf-8")
//         }
//     })

// }).listen(PORT)
// console.log(`Server running on port ${PORT}`)

const server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-type":"text/plan"})
    response.end();  
})

server.listen(PORT, HOST, () => {
    console.log(`Server running on port ${PORT}`)
})


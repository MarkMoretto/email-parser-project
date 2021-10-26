const http = require("http")

// https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
const HOST = process.env.HOST || "127.0.0.1"
const PORT = process.env.PORT || 3000



const server = http.createServer((req, res) => {
    res.end()
})


server.listen(PORT, HOST, () => {
    console.log(`Server running on port ${PORT}`)
})
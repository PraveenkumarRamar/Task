const http = require('http');
const fs = require('fs')


let fname = +new Date()
const server = http.createServer((req,res) => {
    res.writeHead(200,{"title" : "content"})
    fs.writeFile(`${fname}.txt`,
    `This content is write on ${new Date()}` , "utf-8", () => {
        fs.readFile(`${fname}.txt` , "utf-8", (err,data) => {
            if(err)
            console.log(err)
            else
            res.end(data)
        })
    })
})

server.listen(9009,()=>console.log('server is listening'))
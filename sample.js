var http=require('http')
var date=require('./date')
var fs=require('fs');
const { log } = require('console');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write(req.url)
    res.end('hello world');
    console.log('this is')

console.log('This is written in command line interface')
    

}).listen(2000)
fs.appendFile('mynewFile1.txt','Hello Content',(err)=>{
    if(err) throw err
    console.log('saved!');
})
fs.open('mynewTextfile2.txt','w',(err,file)=>{
    if(err) throw err
    console.log('oh ya');
})
fs.unlink('mynewTextfile2.txt',(err)=>{
    if(err) throw err
})

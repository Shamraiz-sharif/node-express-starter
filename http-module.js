const http =require ('http');

const server = http.createServer((req,res)=>{
//  res.send('Welcome to my website');
//console.log(req);
if(req.url === '/'){
    res.end('Welcome To Our Normal Page');
}

else if(req.url ==='/about'){
    res.end('Welocome To Our About Page');
}
 
//Default else
else{
    res.end(`<h1>opps</h1>`);
}



})

const port=7898;
server.listen(port,()=>{
    console.log(`server is live at port no ${port}`);
});
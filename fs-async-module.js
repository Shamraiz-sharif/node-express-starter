const { readFile, writeFile} = require('fs');


readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    
   const first= result;
   console.log(first);

   //Second File Reading
   readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
   
   const second= result;
   console.log(second);
   
   writeFile('./content/Async-addFile.txt',`merging the first and secind file ${first}, ${second}`,{flag: 'a'}
 ,(err,result)=>{
    if(err){
        console.log(err);
        return}

   })

})

})
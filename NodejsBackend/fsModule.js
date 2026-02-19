// const http=require('http');







// const myserver=http.createServer((req,res)=>{
//     // console.log("server1")

//     // res.end("this is my first server");

//     if(req.url=="/")
//         {
//             res.end("ABES ENGINEERING COLLEGE");
//         }
//     else if(req.url=="/about"){
//        res.writeHead(200, { 'Content-Type': 'text/html' });

//     res.end(`
//         <html>
//             <body>
//                 <h1>About Page</h1>
//                 <img src="https://tse4.mm.bing.net/th/id/OIP.YRLnFB2_z8EqsilbfSMoQAHaD9?pid=Api&P=0&h=180" />
//             </body>
//         </html>
//     `);


//     }
//     else if(req.url=="/contactus")
//     {
//         res.end("Ghaziabad UP ");
//     }
//     else{
//         res.end("404 page is not found");
//     }


// })

// myserver.listen(8000,()=>{
//     console.log("server is running");
// })



// const fs=require('fs');

// fs.writeFileSync("./cse-c.text","hi we are coder in node");
// const result=fs.readFileSync("./cse-c.text","utf-8")
// {
//     console.log(result);
// }

//  fs.writeFileSync("./cse-c.text","hi  ");



// const result=fs.readFile("./cse-c.text","utf-8",(err,data)=>{
//     if(err)
//     {
//         console.log(err);
//         return ;
//     }
//     console.log(data);
// })





const fs=require('fs')

// fs.writeFile("./a.txt","abes college is :",()=>{
    
// })

// fs.writeFile("./b.txt","another page ",(err,result)=>{
//     if(err)
//     {
//         console.log("error",err)
//     }
//     else{
//         console.log(result);
//     }

// })


// fs.appendFile("./a.txt",`good`,(err)=>{
//     if(err)
//     {
//         console.log("error",err)
//     }
    

// })


// fs.cpSync("./a.txt","./v.txt");


// fs.cp("./a.txt","./c.txt",()=>{

// })

fs.unlinkSync("./a.txt");
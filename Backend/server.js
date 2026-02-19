const express=require('express');
const app=express();
const port=8080;

app.get('/',(req,res)=>{
    res.send("this is my first server");

})

app.get('/about1',(req,res)=>{
    res.send("<h1>this is my first server ");
})

app.get('/contact',(req,res)=>{
    res.send("<h1>this is contact<h1>");
})

app.get('/about',(req,res)=>{
    const students=[
        {
            id:1,
            name:"lokesh",
            class:"10"
        },
        {
            id:2,
            name:"rohan",
            class:"11"
        },
        {
            id:3,
            name:"ram",
            class:"12"
        },
        {
            id:4,
            name:"shayam",
            class:"9"
        },
        {
            id:5,
            name:"rajesh",
            class:"8"
        },

    ]
    res.send(students);
})


app.listen(port,()=>{
    console.log(`server is run at:http://localhost:${port}`)
})


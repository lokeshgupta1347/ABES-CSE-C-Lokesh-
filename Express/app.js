const express=require('express')

const app=express();

const port=8000;


//data store
const students=[
    {
        id:1,
        name:"lokesh",
        class:"btech"
    },
    {
        id:2,
        name:"utkarsh",
        class:"mca"
    }
]




//data read
// app.get('/read',(req,res)=>{
//     res.json(students);
// })

//data read (R)
app.get('/read',(req,res)=>{
    try{
        res.status(200).json({
            message:"Show all data",
            data:students
        })

    }catch(err){
        res.status(500).json({message:" students data not found",
            error:err.message})

    }
})

//data read for id(R)
app.get('/read/:id',(req,res)=>{
    try{
        const id=req.params.id;
        const student=students.find(s=>s.id==id);
        if(!student)
        {
            return res.status(404).json({
                message:"student not found"
            })
        }
        res.status(200).json({message:"student data found",
            student
        })
        }

    catch(err){
        res.status(500).json({message:" students data not found",
            error:err.message})

    }


})



app.get('/',(req,res)=>{
    res.send("<h1>this is my first server page</h> ");
})

app.get('/about',(req,res)=>{
    res.send("this is my about page")
})

app.get('/image',(req,res)=>{
    res.send("<img src='https://tse1.mm.bing.net/th/id/OIP.Qf5tF1qVTeJPluwal4BF_wHaD9?pid=Api&P=0&h=180'></img>")
})

//data create
app.post('/add',(req,res)=>{
     try{
        const newstudent={
            id:students.length+1,
            //name:req.body.name,
            //class:req.body.class
            ...req.body

        }
        students.push(newstudent);
        res.status(201).json({message:"student data successful add",newstudent})
        }

    catch(err){
        res.status(500).json({message:" students data not found",
            error:err.message})

    }


})

app.listen(port,()=>{
    console.log(`server is run at http://localhost:${port}`);
})
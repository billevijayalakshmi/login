const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const loginModel=require("./models/LoginPage")

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://vijayalakshmibille:Vijji123@cluster0.7s3uqwy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    loginModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("success")
            }else{
                res.json("password is incorrect")
            }
        }
        else{
            res.json("No record is exiting")
        }

    })
})

app.post('/register',(req,res)=>{
    loginModel.create(req.body)
    .then(login=>res.json(login))
    .catch(err => res.json(err))

})

app.listen(3001,()=>{
    console.log("server is running")
})
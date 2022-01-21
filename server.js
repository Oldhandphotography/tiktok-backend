import Express from 'express';
import Mongoose from 'mongoose';
import Data from "./data.js";
import videos from './dbModel.js'
const app  = Express();
//port
const port = 9000;
// middleware pass results to json objects
app.use(Express.json())
app.use((req,res,next)=>{
    res.setHeaders('Access-Control-Allow-Origin',"*"),
    res.setHeaders('Access-Control-Allow-Origin',"*"),
    next()
})
//dbconfig
const connection_url='mongodb+srv://souvik:souvik@123@tiktok-backend.23jyj.mongodb.net/tiktok-clone?retryWrites=true&w=majority';
Mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

app.get('/', (req,res) => res.status(200).send('hello world'));
app.get("/v1/posts",(req,res)=>res.status(200).send(Data));
app.get("/v2/posts",(req,res)=>{
    videos.find((err,data)=>{
    if(err){
        res.status(500).send(err)
    }
    else{
        res.status(200).send(data)
    }
})
});
app.post('/v2/posts',(req,res)=>{
    //adding data to db using post
    const dbVideos = req.body
    videos.create(dbVideos,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})
//adding listener
app.listen(port,()=>console.log(`listinig on localhost: ${port}`));

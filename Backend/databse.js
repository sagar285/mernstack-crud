const mongoose =require("mongoose")
mongoose.connect('mongodb+srv://sagargupta:crud@cluster.cd35jwk.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("connection succesfull");
}).catch((e)=>{
    console.log(e);
})

const Schema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
})

const User =mongoose.model("User",Schema)

module.exports =User
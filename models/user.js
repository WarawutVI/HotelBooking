const mongoose =require('mongoose');

const userSchema =mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    emaill:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
    ,isAdmin :{
        
        type:Boolean, default:false

    }

},{
    timestamps:true,
})


const userModel =mongoose.model("users", userSchema)
module.exports=userModel;
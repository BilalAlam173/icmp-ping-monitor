
const User=require('./model');

// expose a set of operations 
module.exports = {

 insert : (req,res)=>{

    const User = new Car({
         name:req.body.name,
         color:req.body.ip
     });

     // call save funtion on that model's instance
     car.save((err)=>{
         if(err){
             // return error
             res.status(500).json({message :"something went wrong"});
         }else{
             // return success
             res.status(200).json({message:"user added successfully"});
         }
         
     });
 },
 get : (req,res)=>{

    const User = new Car({
         name:req.body.name,
         color:req.body.ip
     });

     // call save funtion on that model's instance
     car.save((err)=>{
         if(err){
             // return error
             res.status(500).json({message :"something went wrong"});
         }else{
             // return success
             res.status(200).json({message:"user added successfully"});
         }
         
     });
 }
}
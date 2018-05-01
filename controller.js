
const User=require('./model');

// expose a set of operations 
module.exports = {

 insert : (req,res)=>{

    const user = new User({
         name:req.body.name,
         ip:req.body.ip,
         startTime:req.body.startTime,
     });

     // call save funtion on that model's instance
     user.save((err)=>{
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
    User.find({}, function(err, docs) {
        if (!err){
            res.send(docs);
        } else {
            res.sendStatus(500);
        }
    });
 },
 update : (req,res)=>{
    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if (err) {
            return res
                .status(500)
                .send({error: "unsuccessful"})
        };
        res.send({success: "success"});
    });
 },
 delete : (req,res)=>{

    User.remove({ _id: req.params.id }, function(err) {
        if (!err) {
                res.sendStatus(200);
        }
        else {
                res.sendStatus(500);
        }
    });
 }
}
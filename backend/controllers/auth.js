const userModel=require('../models/user');
module.exports = {
    login:(req,res)=>{
        const query = { 
            username: req.body.email,
            password:req.body.password
          };
          userModel.findOne(query,(err,user)=>{
              if(err||!user){
                  res.sendStatus(500);
              }else{
                  res.sendStatus(200);
              }
          });

    }
}
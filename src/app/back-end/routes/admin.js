const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Admin = require("../models/admin");

const router = express.Router();

router.post("/register",(req,res,next)=>{
    bcrypt.hash(req.body.password,10)     //Using bcrypt to generate hash
          .then(hash=>{                   //Create a new admin object and set the password as hashed
              const admin = new Admin({
                  email:req.body.email,
                  password:hash,
                  firstname:req.body.firstname,
                  lastname:req.body.lastname,
                  title:req.body.title,
                  department:req.body.department,
                  company:req.body.company
              });
    admin.save()
        .then(result=>{
            res.status(201).json({
                message:"Admin created!",
                result:result
            });
        })
        .catch(err=>{
            res.status(500).json({
                //Customized info for the feedback
                error:"Invalid authentication credentials!"
            });
        });
    });
});

router.post("/login",(req,res,next)=>{
    let fetchedadmin;   
    //To get the data by email
    Admin.findOne({email:req.body.email})
        .then(admin=>{
            console.log(admin);
            //If returned is not a valid email
            if (!admin){  
                //Using " throw" is better than "rerurn res.status().json()" because no compile error occur 
                throw new Error("Auth failed!!!!!  Incorrect email!");            
                // return res.status(401).json({
                //     message:"Auth failed!!!!!  Incorrect email!"
                // });                               
            }else{
                //In case the returned email is valid
                fetchedadmin = admin;
                //return compare result on password
                return bcrypt.compare(req.body.password, admin.password);            
            };
            
        })
        .then(result=>{
            console.log(result);
            //If the compare result is false
            if(!result){
                throw new Error("Auth failed!!!!!  Incorrect password!");
            };
            //In case the returned compare result is true, create a jwt as working like a session
            const token = jwt.sign(
                //jwt.sign() to create a jsonwebtoken
                {email:fetchedadmin.email, adminId:fetchedadmin._id},
                "secret_this_should_be_longer",
                {expiresIn:"1h"}
            );                    
            res.status(200).json({
                token:token,    //Will return string of jwt token
                data:fetchedadmin
            });
        })
        .catch(err => {
            return res.status(401).json({
                message:"Something wrong, auth failed!!"
            });
        });
});

module.exports = router;
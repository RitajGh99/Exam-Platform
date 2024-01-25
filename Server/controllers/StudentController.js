const   StudentModel =require("../models/student");
const {validationResult}=require("express-validator")

class StudentController{

    static async getallstudent(req,res)
    { 
        var results =await StudentModel.getstudent();
        if(results)
        res.send(results)
    }


  static async addstudent(req,res)
    {    
        var name= req.body.name;
        var username = req.body.username;
        var  password= req.body.password;
      
        var phone= req.body.phone;
        var address= req.body.address;
    

        var x =await StudentModel.addstudent(name  , username , password , phone ,address);
        if(x==true)
        res.send("add successfully")
        else
        res.send("add failed")
    }


    static async deletestudent(req,res)
    {   const  id = req.body.id;
        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
                res.json(errors.array());
        }
       else{
             if(id)
                {
                     var result= await StudentModel.deletestudent(id)
                     
                     if(result)
                        res.send("delete done")
                     else 
                        res.send("failed to delete user ")
                }
            }
    }


    static async updatestudent(req,res)
    {   console.log("edit config");
       
    
        const  id = req.body.id;
        const  name= req.body.name;
        const username = req.body.username;
        const password= req.body.password;
       
        const phone= req.body.phone;
        const address= req.body.address;

        

        const x = await StudentModel.edit(id,name  , username , password , phone ,address)

       if (x)
       res.send("data edited successfully")

       else{
        res.send("faild to update user")
       }

    }

}

module.exports=StudentController;
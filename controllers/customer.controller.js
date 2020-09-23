
const Customer = require("../models/customer.model.js");
module.exports ={
    createACus : (req,res)=>{
        if(!req.body){
            console.log("No data");
        }else{
            res.send(req.body);
            console.log(req.body);
            Customer.create(req.body,()=>{
            console.log("?????");
            })
        }
    },
    getAll:(req,res)=>{
        Customer.getAll((toPrint)=>{
            res.send(toPrint);
        });
       
    },
    getACus:(req,res)=>{
        console.log(req.params);
        Customer.getACus(req.params.id,(toPrint)=>{
            res.send(toPrint);

        })
    },
    updateACus:(req,res)=>{
        console.log(req.body);
        Customer.updateACus(req.params.id,req.body,(toPrint)=>{
            res.send(toPrint);
        })

    },
    updateACol:(req,res)=>{

    },
    deleteACus:(req,res)=>{
        console.log(req.body);
        Customer.deleteACus(req.params.id);
    },
    deleteAll:(req,res)=>{
        Customer.deleteAll(toPrint=>{
            res.send(toPrint);
        })
       
    }

}
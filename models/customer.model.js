
const mysql= require("../models/db.js");
const Customer = function(cus){
    this.email=cus.email;
    this.name=cus.name;
    this.active=cus.active;
}

// const a = new Customer({email:"cc",name:"sas",active:true});
// let b= new Customer(a);
// // console.log(b);
// // console.log(a);

Customer.create=(customer,callBack)=>{
mysql.query("INSERT INTO customers VALUES (?,?,?,?)",[customer.id,customer.email,customer.name,customer.active],(err,results,field)=>{
        
    if(err) throw err;
        console.log("successfully");
        //callBack("Cdcmcc");
    });
};
//INSERT INTO customers VALUES (?,?,?,?)
Customer.getAll=(callBack)=>{
    mysql.query("SELECT * FROM customers",(err, results) => {
    if (err) throw err;
    console.log("OK");
    callBack(results);
    }) 

};
Customer.getACus=(id,callBack)=>{
    mysql.query("SELECT * FROM customers where customers.id = ?",[id],(err, results) => {
        if (err) throw err;
        console.log("OK");
        callBack(results);
        }) 
    
}
Customer.updateACus=(id,tempCus,callBack)=>{
    mysql.query("UPDATE customers SET email = ?, name = ?, active= ? WHERE id = ?",[tempCus.email,tempCus.name,tempCus.active,id],(err, results) => {
        if (err) throw err;
        console.log("OK");
        callBack(results.affetedRows);
        }) 
    

}
Customer.deleteACus = (id)=>{
    mysql.query("DELETE FROM customers WHERE id = ?",id,(err,results)=>{
        if(err) throw err;
        console.log("deleteded");
        console.log(results.affectedRows);
    })

}
Customer.deleteAll = (callBack)=>{
    mysql.query("DELETE FROM customers",(err,results)=>{
        if(err) throw err;
        callBack(results);
    })

}
module.exports=Customer;
const mysql = require('mysql');
const connection = mysql.createConnection({
    host:"localhost",
    user:"newuser",
    password:"password",
    database:"testdb",
    port:3306
})
const sqlstr="INSERT INTO customers (email,name, active) VALUES ('Company Inc', 'Highway 37',true)";
connection.connect(err=>{
    if(err) throw err;
    console.log("Conected successfully");
    // connection.query("INSERT INTO customers VALUES (?,?,?,?)",[,'ComAAAAInc', 'Highway 37',true],(err,results,field)=>{
    //     if(err) throw err;
    //     console.log(results);
    // })

    // let newCustomer={id:16,email:"xxccczcc",name:"sas",active:true};
   //connection.query("INSERT INTO customers SET ?", newCustomer, (err, res) => {
    // if (err) throw err;
    // console.log("error: ", err);
    // console.log("OK");
    // }) 
    



    // connection.query("INSERT INTO customers value ? ",["cc","cc",true],(err,results,field)=>{
    //     if(err) throw err;
    //     console.log("successfully");
  //  });
    
})

module.exports =connection;
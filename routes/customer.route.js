
module.exports= app =>{
    const Control= require("../controllers/customer.controller.js");
    app.post("/customers",Control.createACus);
    app.get("/customers",Control.getAll);
    app.get("/customers/:id",Control.getACus);
    app.put("/customers/:id",Control.updateACus);
    app.patch("/customers/:id",Control.updateACol);
    app.delete("/customers",Control.deleteAll);
    app.delete("/customers/:id",Control.deleteACus);
}
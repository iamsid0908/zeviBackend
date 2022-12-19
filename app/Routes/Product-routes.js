const path=require("path")
const productController=require(path.join(__dirname,"../Controllers/Product-controllers"))

module.exports=app=>{
    app.get("/api/product",productController.getAll);
    app.post("/api/product",productController.create);
}
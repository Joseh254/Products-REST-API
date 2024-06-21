import express, { request, response } from 'express';

const app = express();
// **************************************************************
function getAllProducts(request,response){
    response.send("getting all products")
}
app.get("/products", getAllProducts)
// ***************************************************************
function createProducts(request,response){
    response.send("creating a products")
}
app.post("/products",createProducts)
// ***************************************************************
function updateProducts(){
    response.send("updating products")
}
app.patch("/products",updateProducts)
// **************************************************************
function deleteProducts(request,response){
    response.send("deliting a products")
}
app.delete("/products",deleteProducts)
// ***************************************************************

app.listen(3000, () => {
  console.log("App running on port 3000...");
});
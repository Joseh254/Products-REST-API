import express, { request, response } from 'express';
import products from './data.js';

const app = express();
// **************************************************************
function getAllProducts(request,response){
    response.status(404).json(products);
}
app.get("/products", getAllProducts)
// ***************************************************************
function createProducts(request,response){
    response.send("creating a products")
}
app.post("/products",createProducts)
// ***************************************************************
function updateProducts(request,response){
    response.send("updating products")
}
app.patch("/products",updateProducts)
// **************************************************************
function deleteProducts(request,response){
    response.send("deleting a products")
}
app.delete("/products",deleteProducts)
// ***************************************************************

app.listen(3000, () => {
  console.log("App running on port 3000...");
});
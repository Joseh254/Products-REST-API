import express, { request, response } from 'express';

const app = express();


app.get("/products",(request,response)=>{
    response.send("getting all products")
})

app.post("/products",()=>{
    response.send("creating a products")
})

app.patch("/products",()=>{
    response.send("updating products")
})

app.delete("/products",()=>{
    response.send("deliting a products")
})

app.listen(3000, () => {
  console.log("App running on port 3000...");
});
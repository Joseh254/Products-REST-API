import {Router} from 'express'
const router = Router()

function getAllProducts(request,response){
    response.status(501).json(products);
}
router.get("/products", getAllProducts)
// ***************************************************************
function createProducts(request,response){
    response.send("creating a products")
}
router.post("/products",createProducts)
// ***************************************************************
function updateProducts(request,response){
    response.send("updating products")
}
router.patch("/products/:id",updateProducts)
// **************************************************************
function deleteProducts(request,response){
    response.send("deleting a products")
}
router.delete("/products/:id",deleteProducts)
// ***************************************************************

router.get("/products/:id", (request, response) => {
    const product = products.filter(product=>product.id == request.params.id)
    response.send(product)
// ***************************************************************
});
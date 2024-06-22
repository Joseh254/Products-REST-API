import {Router} from 'express'
import pool from '../database.configure.js';
const router = Router()

async function getAllProducts(request,response){
   try{
    const allProducts = await pool.query("SELECT * FROM productsTable");
    response.status(200).json({success:true, data:allProducts.rows})
   }
   catch{
    (error)
    response.status(500).json({success:false, message:error.message})

   }
}
router.get("", getAllProducts)
// ***************************************************************
function createProducts(request,response){
    response.send("creating a products")
}
router.post("",createProducts)
// ***************************************************************
function updateProducts(request,response){
    response.send("updating products")
}
router.patch("/:id",updateProducts)
// **************************************************************
function deleteProducts(request,response){
    response.send("deleting a products")
}
router.delete("/:id",deleteProducts)
// ***************************************************************

router.get("/:id", (request, response) => {
    const product = products.filter(product=>product.id == request.params.id)
    response.send(product)
// ***************************************************************
});

export default router;
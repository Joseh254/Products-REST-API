import  { Router } from 'express'

import { getAllProducts,createProducts,updateProducts,deleteProduct,getSingleProduct } from '../controllers/products.controller.js';
const router = Router()

router.get("", getAllProducts)
// ***************************************************************

router.post("",createProducts)
// ***************************************************************

router.patch("/:id",updateProducts)
// **************************************************************

router.delete("/:id",deleteProduct)
// ***************************************************************

router.get("/:id", getSingleProduct); 

export default router;
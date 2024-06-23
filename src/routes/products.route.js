import  { Router } from 'express'
import {validateCreateProducts} from '../middlewares/productsMiddleware.js';

import { getAllProducts,createProducts,updateProducts,deleteProduct,getSingleProduct,getproductswithoffer } from '../controllers/products.controller.js';
const router = Router()

router.get("", getAllProducts)
// ***************************************************************

router.post("", validateCreateProducts,createProducts)
// ***************************************************************

router.patch("/:id",updateProducts)
// **************************************************************

router.delete("/:id",deleteProduct)
// ***************************************************************

router.get("/:id", getSingleProduct); 

router.get('/offer/:offerr', getproductswithoffer); 

export default router;
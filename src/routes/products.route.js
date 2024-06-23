import {Router, request, response} from 'express'
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
async function createProducts(request,response){
    try {

			const productname=request.body.productname;
			const productdescription=request.body.productdescription;
			const productprice= request.body.productprice;
			const productimage =request.body.productimage;
			const productnoffer=request.body.productonoffer;


		
        const insert = await pool.query('INSERT INTO productsTable(productname,productdescription,productprice,productimage,productonoffer) VALUES($1, $2, $3, $4, $5)',[productname,productdescription,productprice,productimage,productnoffer]);
        if(insert.rowCount==1)
            response.status(201).json({message:"user created succesfuly"}) 
       
    } 
    catch (error) {
        request.send(500).json({success:false,message:error.message})
    }
}
router.post("",createProducts)
// ***************************************************************
function updateProducts(request,response){
    response.send("updating products")
}
router.patch("/:id",updateProducts)
// **************************************************************
async function deleteProduct (request,response){
    const id = request.params.id
    try {
    const deleteProduct_ = await  pool.query("DELETE FROM productsTable  WHERE id=$1",[id])
    // response.send(deleteProduct_) 
    if(deleteProduct_.rowCount===1){
        response.status(200).json({success:true, message:"Product deleted succesfuly"})
    }else{
        response.status(500).json({success:false, message:error.message})
    }
        

    } catch (error) {
        response.status(400).json({success:false, message:"invalid product"})
    }
}
router.delete("/:id",deleteProduct)
// ***************************************************************

async function getSingleProduct(request, response) {
    const id = request.params.id;
    try {
        const SingleProduct = await pool.query("SELECT * FROM productsTable WHERE id=$1", [id]);
        if(SingleProduct.rowCount==0){
            response.status(404).json({success:false, message:error.message})
        }
        else{
            response.json({success:true, data:SingleProduct.rows[0]})
        }
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

router.get("/:id", getSingleProduct);



export default router;
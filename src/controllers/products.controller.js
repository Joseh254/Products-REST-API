
import pool from "../database.configure.js";

export async function getAllProducts(request,response){
    try{
     const allProducts = await pool.query("SELECT * FROM productsTable");
     response.status(200).json({success:true, data:allProducts.rows})
    }
    catch{
     (error)
     response.status(500).json({success:false, message:error.message})
 
    }
 }


//  ************************************************************************
export async function createProducts(request,response){
    try {

			const productname=request.body.productname;
			const productdescription=request.body.productdescription;
			const productprice= request.body.productprice;
			const productimage =request.body.productimage;
			const productnoffer=request.body.productonoffer;


		
        const insert = await pool.query('INSERT INTO productsTable(productname,productdescription,productprice,productimage,productonoffer) VALUES($1, $2, $3, $4, $5)',[productname,productdescription,productprice,productimage,productnoffer]);
        if(insert.rowCount==1)
            response.status(201).json({message:"product created succesfuly"}) 
       
    } 
    catch (error) {
        request.send(500).json({success:false,message:error.message})
    }
}
// ***************************************************************************************
export async function updateProducts(request,response){
    const {productname, productdescription, productprice,productimage,productonoffer}= request.body;
    const id = request.params.id;
    try {
     let updateproduct;
     if(productname)
     {updateproduct= await pool.query("UPDATE productsTable SET productname =$1 WHERE id=$2",[productname,id])
         if(updateproduct.rowCount==1){
             response.send(200).json({success:true, message:"Product name updates succesfuly"})
         }
         else{
             response.status(400).json({success:false, message:"invalid product "})
         }
 }
     if(productdescription)
         {
             updateproduct= await pool.query("UPDATE productsTable SET productdescription = $1 WHERE id =$2",[productdescription,id])
             if(updateproduct.rowCount==1){
                 response.status(200).json({success:true, message:"Product description updated succesfuly"})
             }
             else{
                 response.status(400).json({success:false, message:"invalid product"})
             }
         }
     if(productprice){
         updateproduct = await pool.query("UPDATE productsTable SET productprice= $1 WHERE id=$2",[productprice,id])
 
         if (updateproduct.rowCount==1){
             response.status(200).json({success:true, message: "product price updated succesfuly"})
         }
         else{
             response.status(400).json({success:false, message:"invalid product"})
         }
     }
 
     if(productimage){
         updateproduct = await pool.query("UPDATE productsTable SET productimage = $1 WHERE id = $2",[productimage,id])
         if(updateproduct.rowCount==1){
             response.status(200).json({success:true, message:"product image updated succesfuly"})
             
         }
         else{
             response.status(400).json({success:false, message:"invalid product"})
         }
     }
 
     if(productonoffer){
         updateproduct = await pool.query("UPDATE productsTable SET productonoffer = $1 WHERE id = $2",[productonoffer,id])
         if(updateproduct.rowCount==1){
             response.status(200).json({success:true, message:'product on offer updated succsesfuly'})
         }else{
             response.status(400).json({success:false, message:"invalid product"})
         }
     }
    } catch (error) {
         response.status(400).json({success:false, message:error.message}) 
    }
 }

//  *******************************************************************************

export async function deleteProduct (request,response){
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
// ************************************************************************************

export async function getSingleProduct(request, response) {
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
export function validateCreateProducts(request,response,next){
    const productname=request.body.productname;
    const productdescription=request.body.productdescription;
    const productprice= request.body.productprice;
    const productimage =request.body.productimage;
    const productnoffer=request.body.productonoffer;

    if(!productname)return response.status(400).json({success:false,message:"product name is required"})
    if(!productdescription)return response.status(400).json({success:false,message:"product description is required"})
    if(!productprice)return response.status(400).json({success:false,message:"product priceis required"})
    if(!productimage)return response.status(400).json({success:false,message:"product image is required"})
    if(!productnoffer)return response.status(400).json({success:false,message:"product on offer is required"})
        next();
}
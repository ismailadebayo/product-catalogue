import Product from '../model/product.model.js'
import mongoose from 'mongoose';

export const createProduct= async(req, res)=>{

    const product = req.body;
    if(!product.name || !product.price || !product.image ){
       return res.status(400).json({ success:false, message:"Product not created" })
    }

    const newProduct = new Product(product)

    try{
        await newProduct.save()
        return res.status(201).json({success:true, message:"Successfully created", data: newProduct})
    }catch(error){
        console.error('Error: '+ error.message)
        return res.status(500).json({success:false, message:"Server error"})
    }
      
 }

 export const deleteProduct = async(req, res)=>{
    const {id } = req.params
   try{
       await Product.findByIdAndDelete(id)
       res.status(200).json({success: true, message:'product deleted successfully'})
   }catch(error){
       res.status(404).json({success:false, message:"product not found in database"})
   }
}

 export const getAllProducts = async(req, res)=>{
    try{
        const products =await Product.find({})
        res.status(200).json({success: true, message:'These are all the products', data:products})
    }catch(error){
      console.log(`Error ${error.message}`)
      res.status(501).json({success:false, message:'Server error'})
    }
 }

 export const updateProduct =  async(req, res)=>{

    const {id} = req.params
    const product = req.body
 
    if(!mongoose.Types.ObjectId.isValid){
        res.status(502).json({success: true, message:''})
    }
    try{
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true})
      res.status(200).json({success: true, message:'Product successfully updated', data: updatedProduct})

    }catch(error){
        console.error(`Error: ${error.message}`)
        res.status(401).json({success: false, message: "Product update not successfull"})
      
    }
}

export const getProduct =  async(req, res)=>{

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid){
        res.status(502).json({success: true, message:''})
    }
    try{
    const product = await Product.findById(id)
      res.status(200).json({success: true, message:'Product gotten successfully'})

    }catch(error){
        console.error(`Error: ${error.message}`)
        res.status(401).json({success: false, message: "Product not found"})
      
    }
}



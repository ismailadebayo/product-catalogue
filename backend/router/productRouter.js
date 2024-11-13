import express from 'express'

import  { createProduct, deleteProduct, getAllProducts, updateProduct, getProduct } from '../controller/product.controller.js'

const router = express.Router()

router.post('/', createProduct )

 router.delete('/:id', deleteProduct)

 router.get('/', getAllProducts )


router.put('/:id', updateProduct)

router.get('/:id', getProduct )


export default router


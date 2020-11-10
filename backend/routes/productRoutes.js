import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Product from '../models/Product.js';

router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }

}));


// import {
//   getProducts,
//   getProductById,
//   deleteProduct,
//   createProduct,
//   updateProduct,
//   createProductReview,
//   getTopProducts,
// } from '../controllers/productController.js'
// import { protect, admin } from '../middleware/authMiddleware.js'

// router.route('/').get(getProducts).post(protect, admin, createProduct)
// router.route('/:id/reviews').post(protect, createProductReview)
// router.get('/top', getTopProducts)
// router
//   .route('/:id')
//   .get(getProductById)
//   .delete(protect, admin, deleteProduct)
//   .put(protect, admin, updateProduct)

export default router;
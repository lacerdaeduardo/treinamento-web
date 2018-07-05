import express from 'express';
import productsController from '../controllers/products';

export default () => {
    // Add a new router to the express server.
    var router = express.Router();

    // PRODUCT ROUTES
    router.get('/products', productsController.getProducts);
    router.get('/products/:product_id', productsController.getProduct);
    router.post('/products', productsController.schema, productsController.saveProduct);
    router.put('/products/:product_id', productsController.schema, productsController.updateProduct);
    router.delete('/products/:product_id', productsController.deleteProduct);

    return router;
}
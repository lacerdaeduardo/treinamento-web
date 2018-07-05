import productsDAO from '../dao/products';
import {
    check,
    validationResult
} from 'express-validator/check';

const products = new productsDAO();

var controller = {};

controller.getProducts = (req, res, next) => {
    products.getAll()
        .then(products => res.json(products))
        .catch(err => res.status(500).json({'error': err}));

};

controller.getProduct = (req, res, next) => {
    var id = req.params.product_id;

    products.get(id)
        .then(product => res.json(product))
        .catch(err => res.status(500).json({'error': err}));
};

controller.saveProduct = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    products.add({
        'description': req.body.description,
        'value': req.body.value
    }).then(product => res.json(product))
    .catch(err => res.status(500).json({'error': err}));
};

controller.deleteProduct = (req, res, next) => {
    var id = req.params.product_id;

    products.get(id).then(product => {
        products.delete(product).then(p => res.json(p)).catch(err => res.status(500).json({
            'error': err
        }));
    }).catch(err => res.status(500).json({
        'error': err
    }));
};

controller.updateProduct = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    var id = req.params.product_id;

    products.get(id).then(product => {

        product.description = req.body.description;
        product.value = req.body.value;

        products.update(product).then(p => res.json(p)).catch(err => res.status(500).json({
            'error': err
        }));
    }).catch(err => res.status(500).json({
        'error': err
    }));
};

controller.schema = [
    check('description').isLength({'min':1}),
    check('value').isDecimal()
];

export default controller;
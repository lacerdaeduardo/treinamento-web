var controller = {};

controller.getProducts = (req, res, next) => {
    res.status(200).json({ message: 'getProducts' });   
};

controller.getProduct = (req, res, next) => {
    var id = req.params.product_id;
    res.status(200).json({ message: `getProduct::: ${id}` });   
};

controller.saveProduct = (req, res, next) => {
    res.status(200).json({ message: `saveProduct` });   
};

controller.deleteProduct = (req, res, next) => {
    var id = req.params.product_id;
    res.status(200).json({ message: `deleteProduct::: ${id}` });   
};

controller.updateProduct = (req, res, next) => {
    var id = req.params.product_id;
    res.status(200).json({ message: `updateProduct::: ${id}` });   
};

export default controller; 


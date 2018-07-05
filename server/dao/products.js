import db from '../db/database';

class ProductsDAO {

    constructor() {
        this.db = db();
        this.collection = this.db.getCollection('products') || this.db.addCollection('products');
    }

    add(product) {
        return new Promise((resolve, reject) => {
            try {
                var result = this.collection.insert(product);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

    get(id) {
        return new Promise((resolve, reject) => {
            var result = this.collection.get(id);

            if (result) {
                resolve(result);
            } else {
                reject({
                    'message': 'Not Found'
                });
            }
        });
    }

    getAll() {
        return new Promise((resolve, reject) => {
            try {
                var result = this.collection.data;
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

    update(product) {
        return new Promise((resolve, reject) => {
            try {
                var result = this.collection.update(product);
                resolve(result);
            } catch (err) {
                reject(err);
            }
        });
    }

    delete(product) {
        return new Promise((resolve, reject) => {
            try {
                var result = this.collection.remove(product);
                resolve(result);
            } catch (error) {
                reject(err);
            }
        });
    }

}

export default ProductsDAO;
import db from '../server/db/database';
var loki = db();
var products = loki.getCollection('products') || loki.addCollection('products');

console.log(products);

products.insert({'description': 'prod 01', 'value': 10.00});
products.insert({'description': 'prod 02', 'value': 20.00});
products.insert({'description': 'prod 03', 'value': 30.00});
products.insert({'description': 'prod 04', 'value': 40.00});
products.insert({'description': 'prod 05', 'value': 50.00});
products.insert({'description': 'prod 06', 'value': 60.00});
products.insert({'description': 'prod 07', 'value': 70.00});
products.insert({'description': 'prod 08', 'value': 80.00});
products.insert({'description': 'prod 09', 'value': 90.00});

console.log(products.data);

loki.saveDatabase();

console.log("Finished");



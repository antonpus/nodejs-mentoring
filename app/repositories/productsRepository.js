import Product from '../models/product'
import Review from '../models/review'

class ProductsRepository {
    constructor() {
        this.products = [];
    }

    create(data) {
        const reviews = data.reviews ? data.reviews.map(({rate, comment}) => new Review(rate, comment)) : [];
        const product = new Product(data.id, data.name, reviews);
        this.products.push(product);
        return product;
    }

    find(id) {
        return this.products.find(prd => prd.id === id);
    }

    findAll() {
        return this.products;
    }
}

const productsRepository = new ProductsRepository();

export default productsRepository;
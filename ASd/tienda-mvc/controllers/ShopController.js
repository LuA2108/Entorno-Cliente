import { Product, Cart } from '../models/Product.js';
import { ProductView } from '../views/ProductView.js';
import { CartView } from '../views/CartView.js';

class ShopController {
    constructor(productContainerId, cartContainerId) {
        this.products = [
            new Product(1, 'Camisa', 20),
            new Product(2, 'Pantalón', 40),
            new Product(3, 'Zapatos', 60)
        ];
        this.cart = new Cart();

        this.productView = new ProductView(productContainerId);
        this.cartView = new CartView(cartContainerId);

        this.init();
    }

    init() {
        this.productView.render(this.products, (product) => this.addToCart(product));
        this.cartView.render(this.cart);
    }

    addToCart(product) {
        this.cart.addProduct(product);
        this.cartView.render(this.cart);
    }
}

export default ShopController;
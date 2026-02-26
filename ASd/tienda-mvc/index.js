import ShopController from './controllers/ShopController.js';

document.addEventListener('DOMContentLoaded', () => {
    const shopController = new ShopController('product-container', 'cart-container');
});
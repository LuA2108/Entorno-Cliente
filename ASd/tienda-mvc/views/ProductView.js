class ProductView {
    constructor(productContainerId) {
        this.productContainer = document.getElementById(productContainerId);
    }

    render(products, onAddToCart) {
        this.productContainer.innerHTML = '';
        products.forEach(product => {
            const div = document.createElement('div');
            div.innerHTML = `${product.name} - $${product.price} <button>Add to Cart</button>`;
            div.querySelector('button').addEventListener('click', () => onAddToCart(product));
            this.productContainer.appendChild(div);
        });
    }
}

export { ProductView };
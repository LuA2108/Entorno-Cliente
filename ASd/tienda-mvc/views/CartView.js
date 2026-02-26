class CartView {
    constructor(cartContainerId) {
        this.cartContainer = document.getElementById(cartContainerId);
    }

    render(cart) {
        this.cartContainer.innerHTML = '';
        cart.items.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            this.cartContainer.appendChild(div);
        });
        const totalDiv = document.createElement('div');
        totalDiv.textContent = `Total: $${cart.getTotal()}`;
        this.cartContainer.appendChild(totalDiv);
    }
}

export { CartView };
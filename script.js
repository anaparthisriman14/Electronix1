let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    alert(product + " added to cart!");
    console.log(cart);
}

function goToCart() {
    let cartList = "Items in your cart:\n";
    let total = 0;
    cart.forEach((item, index) => {
        cartList += `${index + 1}. ${item.product} - ₹${item.price}\n`;
        total += item.price;
    });
    cartList += `\nTotal: ₹${total}`;
    alert(cartList);
}


let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(item) {
    cart.push(item);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Item added");
}

document.getElementById("viewCart").onclick = () => {
    let list = document.getElementById("cartItems");

    list.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });

    document.getElementById("cartModal").style.display = "block";
};

function closeModal() {
    document.getElementById("cartModal").style.display = "none";
}

function clearCart() {
    cart = [];
    localStorage.removeItem("cart");
    alert("Cart cleared");
    closeModal();
}

function processOrder() {
    alert("Thank you for your order");
    clearCart();
}

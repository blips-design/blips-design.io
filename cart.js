let cart=JSON.parse(localStorage.getItem('cart'))||[];
function addToCart(i){cart.push(i);localStorage.setItem('cart',JSON.stringify(cart));alert('Item added');}

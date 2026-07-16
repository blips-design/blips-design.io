let cart=JSON.parse(localStorage.getItem("cart")||"[]");function addToCart(i){cart.push(i);localStorage.setItem("cart",JSON.stringify(cart));alert("Item added");}
function openCart(){let m=document.getElementById("cartModal");if(!m)return;document.getElementById("cartItems").innerHTML=cart.map(x=>`<li>${x}</li>`).join('');m.style.display='block';}
function closeCart(){document.getElementById("cartModal").style.display='none';}
function clearCart(){cart=[];localStorage.removeItem("cart");openCart();}
function processOrder(){alert("Thank you for your order.");clearCart();}
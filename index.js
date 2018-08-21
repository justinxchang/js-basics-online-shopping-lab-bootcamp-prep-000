var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var obj = {itemName: item, itemPrice: Math.floor(Math.random() * 100)};
 cart.push(obj);
 return `${obj.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  let newArray = [];
  if(cart.length === 0){
    return "Your shopping cart is empty."
  } else {
  for(let i = 0; i<cart.length - 1; i++){
    newArray.push(` ${cart[i].itemName} at \$${cart[i].itemPrice}`);
  } debugger;
  
    newArray.push(` and ${cart[cart.length].itemName} at \$${cart[cart.length].itemPrice}`)
  }
  return `In your cart, you have${newArray}.`
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

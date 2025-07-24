function addToCart(type, id, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = {
    id,
    name: `${type === 'women' ? "Women's" : "Men's"} Dress ${id}`,
    price,
    image: `images/${type}/dress${id}.jpg`
  };
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

function buyNow(type, id, price) {
  const product = {
    id,
    name: `${type === 'women' ? "Women's" : "Men's"} Dress ${id}`,
    price,
    image: `images/${type}/dress${id}.jpg`
  };
  localStorage.setItem("cart", JSON.stringify([product]));
  window.location.href = "cart.html";
}

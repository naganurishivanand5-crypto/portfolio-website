let cart = [];

document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    cart.push({
      name: btn.dataset.name,
      price: Number(btn.dataset.price)
    });

    alert("Added to cart!");
    localStorage.setItem("cart", JSON.stringify(cart));
  });
});

// LOAD CART
if (document.getElementById("cartItems")) {
  let stored = JSON.parse(localStorage.getItem("cart")) || [];
  let list = document.getElementById("cartItems");
  let total = 0;

  stored.forEach(item => {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = `${item.name} - ₹${item.price}`;
    list.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").innerText = total;
}

// FILTER MENU
document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    let filter = btn.dataset.filter;

    document.querySelectorAll(".food-item").forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
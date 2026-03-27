const products = [
  {
    name: "Affogato",
    price: 160,
    img: "./images/affogato.jpg",
    description: "Espresso poured over creamy vanilla ice cream."
  },
  {
    name: "Americano",
    price: 120,
    img: "./images/americano.jpg",
    description: "Bold espresso shots with smooth hot water."
  },
  {
    name: "Caramel Hazelnut Iced Coffee",
    price: 190,
    img: "./images/caramel hazelnut iced coffee.jpg",
    description: "Chilled coffee with caramel and hazelnut sweetness."
  },
  {
    name: "Cortado",
    price: 140,
    img: "./images/cortado.jpg",
    description: "Equal parts espresso and steamed milk."
  },
  {
    name: "Mocha",
    price: 170,
    img: "./images/mocha.jpg",
    description: "Rich chocolate blended with espresso and milk."
  },
  {
    name: "Cold Brew",
    price: 180,
    img: "./images/cold brew.jpg",
    description: "Slow-steeped coffee served cold and refreshing."
  },
  {
    name: "Latte",
    price: 150,
    img: "./images/latte.jpg",
    description: "Smooth espresso with creamy steamed milk."
  },
  {
    name: "Expresso",
    price: 130,
    img: "./images/expresso.jpg",
    description: "Strong and aromatic single-shot coffee classic."
  }
];

let total = 0;

function renderProducts(){
  const container = document.getElementById("products");

  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p class="desc">${p.description}</p>
        <p class="price">₱${p.price}</p>
        <button onclick="buy(${p.price})">Buy</button>
      </div>
    `;
  });
}

function buy(price){
  total += price;
  document.getElementById("total").innerText = "₱" + total;
}

function checkout(){
  if (total === 0) {
    alert("Please add at least one drink before checkout.");
    return;
  }

  const fullName = document.getElementById("fullName").value.trim();
  const deliveryAddress = document.getElementById("deliveryAddress").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();

  if (!fullName || !deliveryAddress || !phoneNumber) {
    alert("Please complete all required checkout fields.");
    return;
  }

  const selectedPayment = document.querySelector('input[name="payment"]:checked');
  const paymentMethod = selectedPayment ? selectedPayment.value : "Cash on Delivery (COD)";

  alert(
    `Order placed! ☕\nName: ${fullName}\nAddress: ${deliveryAddress}\nPhone: ${phoneNumber}\nPayment: ${paymentMethod}\nTotal: ₱${total}`
  );
}

function orderNow(){
  document.getElementById("menu").scrollIntoView({
    behavior: "smooth"
  });
}

renderProducts();
/*const CardItems = document.getElementById("card-items");
const cartItemsContainer = document.getElementById("cart-items");
let cart = JSON.parse(localStorage.getItem("cart")) || []; // Recupera os itens salvos
updateCartModal();
if (CardItems) { // Verifica se está na index.html
    CardItems.addEventListener("click", function(event) {
        let parentButton = event.target.closest(".add-button");
    
        if (parentButton) {
            const name = parentButton.getAttribute("data-title");
            const price = parseFloat(parentButton.getAttribute("data-price"));
    
            addToCart(name, price);
        }
    });
}

function addToCart(name, price) {
    const parentCard = document.querySelector(`[data-title="${name}"]`).closest(".card"); 
    const imageSrc = parentCard.querySelector("img").src; // Captura a imagem do produto

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1, image: imageSrc });
    }

    localStorage.setItem("cart", JSON.stringify(cart)); // Salva os itens no localStorage
}

// Atualiza o carrinho na página de carrinho.html
if (cartItemsContainer) { // Só executa se estiver na carrinho.html
    document.addEventListener("DOMContentLoaded", function() {
        updateCartModal();
    });
}

function updateCartModal() {
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}" width="50"></td>
            <td>${item.name}</td>
            <td>R$ ${item.price.toFixed(2)}</td>
            <td>
                <div class="qty">
                    <button class="decrease-qty" data-name="${item.name}"><img src="icon-img/subtract.png" alt="Diminuir" width="50%"></button>
                    <span>${item.quantity}</span>
                    <button class="increase-qty" data-name="${item.name}"><img src="icon-img/plus.png" alt="Aumentar" width="50%"></button>
                </div>
            </td>
            <td>R$ ${(item.price * item.quantity).toFixed(2)}</td>
            <td><button class="remove-item" data-name="${item.name}">❌</button></td>
        `;
        cartItemsContainer.appendChild(row);
        total += item.price * item.quantity;
    });
    document.querySelector(".box-01 span:last-child").innerText = `R$ ${total.toFixed(2)}`;
    document.querySelector(".box-footer span:last-child").innerText = `R$ ${total.toFixed(2)}`;

    // Eventos para aumentar/diminuir a quantidade
    document.querySelectorAll(".increase-qty").forEach(button => {
        button.addEventListener("click", function () {
            changeQuantity(button.getAttribute("data-name"), 1);
        });
    });

    document.querySelectorAll(".decrease-qty").forEach(button => {
        button.addEventListener("click", function () {
            changeQuantity(button.getAttribute("data-name"), -1);
        });
    });

    // Evento para remover item
    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", function () {
            removeFromCart(button.getAttribute("data-name"));
        });
    });
}
function changeQuantity(name, amount) {
    const item = cart.find(item => item.name === name);

    if (!item) return;

    item.quantity += amount;

    // Se a quantidade for menor que 1, remove o item do carrinho
    if (item.quantity <= 0) {
        cart = cart.filter(item => item.name !== name);
    }

    localStorage.setItem("cart", JSON.stringify(cart)); // Atualiza o localStorage
    updateCartModal(); // Atualiza a interface do carrinho
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartModal();
}*/


// LOAD BAG

bag = loadBag();

const cartItems = document.getElementById("cartItems");
const emptyCart = document.querySelector(".empty-cart");
const cartContainer = document.querySelector(".cart-container");

const subtotalElement = document.getElementById("subtotal");
const totalElement = document.getElementById("total");

function displayCart(){

    if(bag.length === 0){

    document.getElementById("cartHeroText").textContent =
        "Discover our skincare and beauty essentials to find your new favourites.";

    emptyCart.style.display = "block";
    cartContainer.style.display = "none";

    return;

}

document.getElementById("cartHeroText").textContent =
    "Review your selected beauty essentials.";

emptyCart.style.display = "none";
cartContainer.style.display = "grid";

    cartItems.innerHTML = "";

    let subtotal = 0;

    bag.forEach((item,index)=>{

        subtotal += item.price * item.quantity;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-info">

                <h3>${item.name}</h3>
                ${item.shade ? `<p><strong>Shade:</strong> ${item.shade}</p>` : ""}

                <p>£${item.price.toFixed(2)}</p>

                <div class="quantity">

                    <button data-action="decrease" data-index="${index}" aria-label="Decrease quantity">−</button>

                    <span>${item.quantity}</span>

                    <button data-action="increase" data-index="${index}" aria-label="Increase quantity">+</button>

                </div>

                <button class="remove-btn"
                        data-action="remove"
                        data-index="${index}">

                    Remove

                </button>

            </div>

        </div>

        `;

    });


    // FREE SHIPPING PROGRESS


    const shippingGoal = 40;

    const remaining = shippingGoal - subtotal;

    const progress = Math.min((subtotal / shippingGoal) * 100, 100);

    document.getElementById("shippingProgressFill").style.width =
        progress + "%";

    const message = document.getElementById("shippingMessage");

    if(subtotal >= shippingGoal){

        message.innerHTML = "<strong>Free Standard UK Delivery Unlocked</strong>";

    }else{

        message.innerHTML =
            `Add <strong>£${remaining.toFixed(2)}</strong> more for <strong>FREE Standard UK Delivery</strong>`;

    }

    subtotalElement.textContent = `£${subtotal.toFixed(2)}`;
    totalElement.textContent = `£${subtotal.toFixed(2)}`;


}
function increaseQuantity(index){

    bag[index].quantity++;

    saveCart();

}

function decreaseQuantity(index){

    if(bag[index].quantity > 1){

        bag[index].quantity--;

    }else{

        bag.splice(index,1);

    }

    saveCart();

}

function removeItem(index){

    bag.splice(index,1);

    saveCart();

}
function saveCart(){

    localStorage.setItem("bag", JSON.stringify(bag));

    updateBagCount();

    displayCart();

}

// EVENT DELEGATION

cartItems.addEventListener("click", (e) => {

    const button = e.target.closest("button[data-action]");

    if(!button) return;

    const index = Number(button.dataset.index);

    if(button.dataset.action === "increase"){

        increaseQuantity(index);

    }else if(button.dataset.action === "decrease"){

        decreaseQuantity(index);

    }else if(button.dataset.action === "remove"){

        removeItem(index);

    }

});
 

// CHECKOUT BUTTON


const checkoutBtn = document.getElementById("checkoutBtn");

if(checkoutBtn){

    checkoutBtn.addEventListener("click", () => {

        window.location.href = "checkout.html";

    });

}

displayCart();
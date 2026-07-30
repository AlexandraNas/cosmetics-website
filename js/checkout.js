
// CHECKOUT

document.addEventListener("DOMContentLoaded", () => {

    // loadBag() is defined in bag.js and safely handles a
    // missing/corrupted localStorage value via try/catch
    const bag = loadBag();

    const checkoutItems = document.getElementById("checkoutItems");
    const subtotalElement = document.getElementById("checkoutSubtotal");
    const shippingElement = document.getElementById("checkoutShipping");
    const totalElement = document.getElementById("checkoutTotal");

    const form = document.getElementById("checkoutForm");

    // Display Order Summary
   
    function displayOrderSummary(){

        if(!checkoutItems) return;

        checkoutItems.innerHTML = "";

        let subtotal = 0;

        if(bag.length === 0){

            checkoutItems.innerHTML = "<p>Your bag is empty.</p>";

            subtotalElement.textContent = "£0.00";
            shippingElement.textContent = "£0.00";
            totalElement.textContent = "£0.00";

            return;

        }

        bag.forEach(item => {

            const itemTotal = item.price * item.quantity;

            subtotal += itemTotal;

            const product = document.createElement("div");

            product.classList.add("checkout-item");

            product.innerHTML = `
    <div class="checkout-item-info">

        <span>${item.name}</span>

        <small>${item.shade || "Standard"}</small>

        <small>Qty: ${item.quantity}</small>

    </div>

    <span class="checkout-price">
        £${itemTotal.toFixed(2)}
    </span>
`;
            checkoutItems.appendChild(product);

        });

        const shipping = subtotal >= 40 ? 0 : 4.95;

        subtotalElement.textContent = `£${subtotal.toFixed(2)}`;

        shippingElement.textContent =
            shipping === 0 ? "FREE" : `£${shipping.toFixed(2)}`;

        totalElement.textContent =
            `£${(subtotal + shipping).toFixed(2)}`;

    }

    displayOrderSummary();

    // Form Validation
    
    form.addEventListener("submit", function(e){

        e.preventDefault();

        if(bag.length === 0){

            alert("Your bag is empty.");

            return;

        }

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const address = document.getElementById("address").value.trim();
        const city = document.getElementById("city").value.trim();
        const postcode = document.getElementById("postcode").value.trim();

        const cardName = document.getElementById("cardName").value.trim();
        const cardNumber = document.getElementById("cardNumber").value.replace(/\s/g, "");
        const expiry = document.getElementById("expiry").value.trim();
        const cvv = document.getElementById("cvv").value.trim();

        if(
            !firstName ||
            !lastName ||
            !email ||
            !phone ||
            !address ||
            !city ||
            !postcode ||
            !cardName ||
            !cardNumber ||
            !expiry ||
            !cvv
        ){

            alert("Please complete all required fields.");

            return;

        }

        if(!email.includes("@")){

            alert("Please enter a valid email address.");

            return;

        }

        if(cardNumber.length < 16){

            alert("Please enter a valid card number.");

            return;

        }

        if(cvv.length !== 3){

            alert("Please enter a valid CVV.");

            return;

        }

        // Success
        // Generate an order number
        const orderNumber = "AGL-" + Math.floor(100000 + Math.random() * 900000);

        // Save it for the confirmation page
        localStorage.setItem("orderNumber", orderNumber);

        // Clear the bag
        localStorage.removeItem("bag");

        if(typeof updateBagCount === "function"){
            updateBagCount();
        }

        // Go to confirmation page
        window.location.href = "confirmation.html";

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

});

// SHOPPING BAG

function showBagNotification(){

    const notification = document.getElementById("bagNotification");

    if(!notification) return;

    notification.classList.add("show");

    setTimeout(()=>{

        notification.classList.remove("show");

    },2000);

}

function loadBag(){

    try{

        return JSON.parse(localStorage.getItem("bag")) || [];

    }catch(error){

        console.error("Saved bag could not be read, starting with an empty bag.", error);

        return [];

    }

}

let bag = loadBag();

function addToBag(product){

    const existingProduct = bag.find(item => item.id === product.id);

    if(existingProduct){

        existingProduct.quantity++;

    }else{

        product.quantity = 1;

        bag.push(product);

    }

    localStorage.setItem("bag", JSON.stringify(bag));

    updateBagCount();
    showBagNotification();

}

function updateBagCount(){

    const cartCount = document.querySelector(".cart-count");

    if(!cartCount) return;

    const totalItems = bag.reduce((total,item)=>{

        return total + item.quantity;

    },0);

    cartCount.textContent = `(${totalItems})`;

}

document.addEventListener("DOMContentLoaded", updateBagCount);
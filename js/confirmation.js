document.addEventListener("DOMContentLoaded", () => {

    const orderElement = document.getElementById("orderNumber");

    const savedOrder =
        localStorage.getItem("orderNumber");

    if(savedOrder){

        orderElement.textContent = savedOrder;

    }

});
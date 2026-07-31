// FOUNDATION

function changeFoundation(image, shade) {

    const cardImage = document.getElementById("foundationImage");
    if (cardImage) {
        cardImage.src = image;
    }

    const modalImage = document.getElementById("foundationModalImage");
    if (modalImage) {
        modalImage.src = image;
    }

    const homeButton = document.querySelector('.add-to-bag[data-id="foundation"]');
    if (homeButton) {
        homeButton.dataset.image = image;
        homeButton.dataset.shade = shade;
    }


    const modalButton = document.querySelector("#foundationModal .add-to-bag");
    if (modalButton) {
        modalButton.dataset.image = image;
        modalButton.dataset.shade = shade;
    }

    setActiveSwatch("foundation", shade);

}

// LIPSTICK

function changeLipstick(image, shade) {

    // Home page / Products page card image
    const cardImage = document.getElementById("lipstickImage");
    if (cardImage) {
        cardImage.src = image;
    }

    // Modal image (Products page)

    const modalImage = document.getElementById("lipstickModalImage");
    if (modalImage) {
        modalImage.src = image;
    }

    // Home page Add to Bag button
    const homeButton = document.querySelector('.add-to-bag[data-id="lipstick"]');
    if (homeButton) {
        homeButton.dataset.image = image;
        homeButton.dataset.shade = shade;
    }

    // Products page modal Add to Bag button

    const modalButton = document.querySelector("#lipstickModal .add-to-bag");
    if (modalButton) {
        modalButton.dataset.image = image;
        modalButton.dataset.shade = shade;
    }

    setActiveSwatch("lip", shade);

}

// MASCARA

function changeMascara(image, shade){

    document.getElementById("mascaraImage").src = image;
    document.getElementById("mascaraModalImage").src = image;

    // Update modal button
    const modalButton = document.querySelector("#mascaraModal .add-to-bag");
    modalButton.dataset.image = image;
    modalButton.dataset.shade = shade;

    // Update product card button
    const cardButton = document.querySelector(".shop-card .add-to-bag[data-id='mascara']");
    cardButton.dataset.image = image;
    cardButton.dataset.shade = shade;

    setActiveSwatch("shade", shade);

}

function setActiveSwatch(className, shade){
    document.querySelectorAll("." + className).forEach(swatch => {
        swatch.classList.toggle("active", swatch.dataset.shade === shade);
    });
}

// SHADE SWATCH CLICKS

document.querySelectorAll(".foundation").forEach(swatch => {

    swatch.addEventListener("click", () => {

        changeFoundation(swatch.dataset.image, swatch.dataset.shade);

    });

});

document.querySelectorAll(".lip").forEach(swatch => {

    swatch.addEventListener("click", () => {

        changeLipstick(swatch.dataset.image, swatch.dataset.shade);

    });

});

document.querySelectorAll(".shade").forEach(swatch => {

    swatch.addEventListener("click", () => {

        changeMascara(swatch.dataset.image, swatch.dataset.shade);

    });

});

// highlight the shade that matches the default image already shown
setActiveSwatch("foundation", "Light Nude");
setActiveSwatch("lip", "Soft Rose Nude");
setActiveSwatch("shade", "Black");


// PRODUCT FILTER


const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".shop-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        productCards.forEach(card => {

            if (
                filter === "all" ||
                card.dataset.category === filter
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});

// MODAL SECTION

const vitaminImage = document.getElementById("vitaminImage");
const vitaminModal = document.getElementById("vitaminModal");
const closeButtons = document.querySelectorAll(".close-modal");

const moisturiserImage = document.getElementById("moisturiserImage");
const moisturiserModal = document.getElementById("moisturiserModal");
const repairCreamImage = document.getElementById("repairCreamImage");
const repairCreamModal = document.getElementById("repairCreamModal");
const foundationImage = document.getElementById("foundationImage");
const foundationModal = document.getElementById("foundationModal");
const lipstickImage = document.getElementById("lipstickImage");
const lipstickModal = document.getElementById("lipstickModal");
const mascaraImage = document.getElementById("mascaraImage");
const mascaraModal = document.getElementById("mascaraModal");
const arganOilImage = document.getElementById("arganOilImage");
const arganOilModal = document.getElementById("arganOilModal");
const hairMaskImage = document.getElementById("hairMaskImage");
const hairMaskModal = document.getElementById("hairMaskModal");
const scalpBrushImage = document.getElementById("scalpBrushImage");
const scalpBrushModal = document.getElementById("scalpBrushModal");
const brushSetImage = document.getElementById("brushSetImage");
const brushSetModal = document.getElementById("brushSetModal");
const faceRollerImage = document.getElementById("faceRollerImage");
const faceRollerModal = document.getElementById("faceRollerModal");
const mirrorImage = document.getElementById("mirrorImage");
const mirrorModal = document.getElementById("mirrorModal");

// each product's trigger image + the modal it opens, looped over
// instead of 12 near-identical blocks - also means keyboard support
// (Enter/Space) and Escape-to-close only need to be written once
const modalPairs = [
    [vitaminImage, vitaminModal],
    [moisturiserImage, moisturiserModal],
    [repairCreamImage, repairCreamModal],
    [foundationImage, foundationModal],
    [lipstickImage, lipstickModal],
    [mascaraImage, mascaraModal],
    [arganOilImage, arganOilModal],
    [hairMaskImage, hairMaskModal],
    [scalpBrushImage, scalpBrushModal],
    [brushSetImage, brushSetModal],
    [faceRollerImage, faceRollerModal],
    [mirrorImage, mirrorModal]
];

function openModal(modal){
    if (!modal) return;
    modal.style.display = "flex";
    const closeBtn = modal.querySelector(".close-modal");
    if (closeBtn) closeBtn.focus();
}

function closeModal(modal){
    if (modal) modal.style.display = "none";
}

function closeAllModals(){
    modalPairs.forEach(([, modal]) => closeModal(modal));
}

modalPairs.forEach(([trigger, modal]) => {

    if (!trigger || !modal) return;

    trigger.addEventListener("click", () => openModal(modal));

    trigger.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openModal(modal);
        }
    });

});

closeButtons.forEach(function (button) {
    button.addEventListener("click", closeAllModals);
});

window.addEventListener("click", function (event) {
    modalPairs.forEach(([, modal]) => {
        if (event.target === modal) closeModal(modal);
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllModals();
});


// SEARCH


const searchIcon = document.getElementById("searchIcon");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const shopCards = document.querySelectorAll(".shop-card");

if (searchIcon) {
    searchIcon.addEventListener("click", () => {
        searchForm.classList.toggle("active");
        if (searchForm.classList.contains("active")) {
            searchInput.focus();
        }
    });
}
function filterProducts(query) {
    const term = query.trim().toLowerCase();
    const productSections = document.querySelectorAll(".product-section");
    let anyVisibleOverall = false;

    productSections.forEach(section => {
        const cardsInSection = section.querySelectorAll(".shop-card");
        let anyVisible = false;

        cardsInSection.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            const matches = title.includes(term);
            card.style.display = matches ? "block" : "none";
            if (matches) anyVisible = true;
        });

        section.style.display = anyVisible ? "block" : "none";
        if (anyVisible) anyVisibleOverall = true;
    });

    const noResults = document.getElementById("noResultsMessage");
    if (noResults) {
        noResults.style.display = anyVisibleOverall ? "none" : "block";
    }
}

function scrollToResults() {
    const resultsSection = document.querySelector(".shop-products");
    if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: "smooth" });
    }
}

if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const query = searchInput.value;

        if (shopCards.length > 0) {
            filterProducts(query);
            scrollToResults();
        } else {
            window.location.href = "products.html?search=" + encodeURIComponent(query);
        }
    });
}

if (shopCards.length > 0) {
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            filterProducts(searchInput.value);
        });
    }

    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get("search");

    if (queryParam) {
        searchInput.value = queryParam;
        searchForm.classList.add("active");
        filterProducts(queryParam);
        scrollToResults();
    }
}

// PRODUCT IMAGE ZOOM

const zoomContainers = document.querySelectorAll(".modal-image-container");

zoomContainers.forEach(container => {

    const image = container.querySelector(".modal-image");

    container.addEventListener("mousemove", (e) => {

        const rect = container.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        image.style.transformOrigin = `${x}% ${y}%`;
        image.style.transform = "scale(2)";

    });

    container.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";
        image.style.transformOrigin = "center center";

    });

});

const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const closeButton = document.querySelector(".close-menu");

if (menuButton && mobileMenu && closeButton) {

    menuButton.addEventListener("click", () => {
        mobileMenu.classList.add("active");
        menuButton.setAttribute("aria-expanded", "true");
    });

    closeButton.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
    });

}
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

mobileMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        if (menuButton) menuButton.setAttribute("aria-expanded", "false");
    });
});

// ADD TO BAG


const addButtons = document.querySelectorAll(".add-to-bag");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product = {

    id: button.dataset.id + "-" + (button.dataset.shade || "default"),
    name: button.dataset.name,
    shade: button.dataset.shade || "",
    price: Number(button.dataset.price),
    image: button.dataset.image

};


        addToBag(product);

    });

});
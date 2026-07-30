
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
if (vitaminImage) {
vitaminImage.addEventListener("click", function () {
    vitaminModal.style.display = "flex";
});
}
if (moisturiserImage) {
moisturiserImage.addEventListener("click", function () {
    moisturiserModal.style.display = "flex";
});
}
if (repairCreamImage) {
repairCreamImage.addEventListener("click", function () {
    repairCreamModal.style.display = "flex";
});
}
if (foundationImage) {
foundationImage.addEventListener("click", function () {
    foundationModal.style.display = "flex";
});
}
if (lipstickImage) {
lipstickImage.addEventListener("click", function () {
    lipstickModal.style.display = "flex";
});
}
if (mascaraImage) {
mascaraImage.addEventListener("click", function () {
    mascaraModal.style.display = "flex";
});
}
if (arganOilImage) {
arganOilImage.addEventListener("click", function () {
    arganOilModal.style.display = "flex";
});
}
if (hairMaskImage) {
hairMaskImage.addEventListener("click", function () {
    hairMaskModal.style.display = "flex";
});
}
if (scalpBrushImage) {
scalpBrushImage.addEventListener("click", function () {
    scalpBrushModal.style.display = "flex";
});
}
if (brushSetImage) {
brushSetImage.addEventListener("click", function () {
    brushSetModal.style.display = "flex";
});
}
if (faceRollerImage) {
faceRollerImage.addEventListener("click", function () {
    faceRollerModal.style.display = "flex";
});
}
if (mirrorImage) {
mirrorImage.addEventListener("click", function () {
    mirrorModal.style.display = "flex";
});
}
closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        if (vitaminModal) vitaminModal.style.display = "none";
        if (moisturiserModal) moisturiserModal.style.display = "none";
        if (repairCreamModal) repairCreamModal.style.display = "none";
        if (foundationModal) foundationModal.style.display = "none";
        if (lipstickModal) lipstickModal.style.display = "none";
        if (mascaraModal) mascaraModal.style.display = "none";
        if (arganOilModal) arganOilModal.style.display = "none";
        if (hairMaskModal) hairMaskModal.style.display = "none";
        if (scalpBrushModal) scalpBrushModal.style.display = "none";
        if (brushSetModal) brushSetModal.style.display = "none";
        if (faceRollerModal) faceRollerModal.style.display = "none";
        if (mirrorModal) mirrorModal.style.display = "none";

    });
});

window.addEventListener("click", function (event) {

   if (event.target === vitaminModal) {
    vitaminModal.style.display = "none";
}

if (event.target === moisturiserModal) {
    moisturiserModal.style.display = "none";
}
if (event.target === repairCreamModal) {
    repairCreamModal.style.display = "none";
}
if (event.target === foundationModal) {
    foundationModal.style.display = "none";
}
if (event.target === lipstickModal) {
    lipstickModal.style.display = "none";
}
if (event.target === mascaraModal) {
    mascaraModal.style.display = "none";
}
if (event.target === arganOilModal) {
    arganOilModal.style.display = "none";
}
if (event.target === hairMaskModal) {
    hairMaskModal.style.display = "none";
}
if (event.target === scalpBrushModal) {
    scalpBrushModal.style.display = "none";
}
if (event.target === brushSetModal) {
    brushSetModal.style.display = "none";
}
if (event.target === faceRollerModal) {
    faceRollerModal.style.display = "none";
}
if (event.target === mirrorModal) {
    mirrorModal.style.display = "none";
}
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
    });
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
    });

    closeButton.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

}
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

mobileMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
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
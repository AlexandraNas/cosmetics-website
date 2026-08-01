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

    const cardImage = document.getElementById("mascaraImage");
    const modalImage = document.getElementById("mascaraModalImage");

    if (cardImage) {
        cardImage.src = image;
    }
    if (modalImage) {
        modalImage.src = image;
    }

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

function markSwatchActive(swatch) {
    const group = swatch.parentElement;
    if (!group) return;
    group.querySelectorAll(".foundation, .lip, .shade").forEach(el => {
        el.classList.remove("active");
    });
    swatch.classList.add("active");

    const label = group.nextElementSibling;
    if (label && label.classList.contains("shade-label")) {
        label.textContent = swatch.dataset.shade || "";
    }
}

// showing the shade currently selected, so it isn't only visible on hover.
function initShadeLabels() {
    document.querySelectorAll(".shade-swatches, .lipstick-swatches, .modal-swatches").forEach(group => {
        const firstSwatch = group.querySelector(".foundation, .lip, .shade");
        if (!firstSwatch) return;

        const label = document.createElement("p");
        label.className = "shade-label";
        label.textContent = firstSwatch.dataset.shade || "";
        group.insertAdjacentElement("afterend", label);
    });
}
initShadeLabels();

document.querySelectorAll(".foundation").forEach(swatch => {

    swatch.addEventListener("click", () => {

        changeFoundation(swatch.dataset.image, swatch.dataset.shade);
        markSwatchActive(swatch);

    });

});

document.querySelectorAll(".lip").forEach(swatch => {

    swatch.addEventListener("click", () => {

        changeLipstick(swatch.dataset.image, swatch.dataset.shade);
        markSwatchActive(swatch);

    });

});

document.querySelectorAll(".shade").forEach(swatch => {

    swatch.addEventListener("click", () => {

        changeMascara(swatch.dataset.image, swatch.dataset.shade);
        markSwatchActive(swatch);

    });

});

document.querySelectorAll(".shade-swatches, .lipstick-swatches, .modal-swatches").forEach(group => {
    const firstSwatch = group.querySelector(".foundation, .lip, .shade");
    if (firstSwatch) firstSwatch.classList.add("active");
});


// PRODUCT FILTER + SEARCH (combined so both can apply together)


const filterButtons = document.querySelectorAll(".filter-btn");
let activeCategory = "all";

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        activeCategory = button.dataset.filter;

        applyFilters();

    });

});

// MODAL SECTION

const closeButtons = document.querySelectorAll(".close-modal");
const allModals = document.querySelectorAll(".modal");

document.querySelectorAll('img[id$="Image"]').forEach(function (image) {

    const modal = document.getElementById(image.id.replace(/Image$/, "Modal"));
    if (!modal) return;

    image.addEventListener("click", function () {
        modal.style.display = "flex";
    });

});

closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        allModals.forEach(function (modal) {
            modal.style.display = "none";
        });
    });
});

window.addEventListener("click", function (event) {
    allModals.forEach(function (modal) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});


// SEARCH


const searchIcon = document.getElementById("searchIcon");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const shopCards = document.querySelectorAll(".shop-card");

if (searchIcon) {
    searchIcon.addEventListener("click", () => {
        const isActive = searchForm.classList.toggle("active");
        searchIcon.setAttribute("aria-expanded", isActive ? "true" : "false");
        if (isActive) {
            searchInput.focus();
        }
    });
}

// Applies the active category filter AND the current search term together

function applyFilters() {
    const term = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const productSections = document.querySelectorAll(".product-section");
    let anyResultsVisible = false;

    productSections.forEach(section => {
        const cardsInSection = section.querySelectorAll(".shop-card");
        let anyVisibleInSection = false;

        cardsInSection.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            const matchesSearch = term === "" || title.includes(term);
            const matchesCategory = activeCategory === "all" || card.dataset.category === activeCategory;
            const show = matchesSearch && matchesCategory;

            card.style.display = show ? "block" : "none";
            if (show) anyVisibleInSection = true;
        });

        section.style.display = anyVisibleInSection ? "block" : "none";
        if (anyVisibleInSection) anyResultsVisible = true;
    });

    const noResultsMessage = document.getElementById("noResultsMessage");
    if (noResultsMessage) {
        noResultsMessage.style.display = anyResultsVisible ? "none" : "block";
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

        if (shopCards.length > 0) {
            applyFilters();
            scrollToResults();
        } else {
            window.location.href = "products.html?search=" + encodeURIComponent(searchInput.value);
        }
    });
}

if (shopCards.length > 0) {
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            applyFilters();
        });
    }

    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get("search");

    if (queryParam) {
        searchInput.value = queryParam;
        searchForm.classList.add("active");
        applyFilters();
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
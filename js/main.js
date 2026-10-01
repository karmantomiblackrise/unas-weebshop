"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isExpanded));
      menuButton.setAttribute("aria-label", isExpanded ? "Menü megnyitása" : "Menü bezárása");
      navigation.classList.toggle("is-open", !isExpanded);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Menü megnyitása");
        navigation.classList.remove("is-open");
      });
    });
  }

  const filterButtons = document.querySelectorAll(".filter-button");
  const products = [...document.querySelectorAll(".product-card")];
  const searchInput = document.getElementById("product-search");
  const emptyState = document.getElementById("empty-products");
  let activeCategory = "all";

  function filterProducts() {
    const query = searchInput ? searchInput.value.trim().toLocaleLowerCase("hu") : "";
    let visibleCount = 0;

    products.forEach((product) => {
      const matchesCategory = activeCategory === "all" || product.dataset.category === activeCategory;
      const matchesQuery = (product.dataset.name || "").toLocaleLowerCase("hu").includes(query);
      const isVisible = matchesCategory && matchesQuery;
      product.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    if (emptyState) emptyState.hidden = visibleCount !== 0;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.filter || "all";
      filterButtons.forEach((filter) => {
        const isActive = filter === button;
        filter.classList.toggle("is-active", isActive);
        filter.setAttribute("aria-pressed", String(isActive));
      });
      filterProducts();
    });
  });

  if (searchInput) searchInput.addEventListener("input", filterProducts);

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      window.showToast("Köszönjük az érdeklődést! Ez a bemutató űrlap nem továbbít adatot.");
      contactForm.reset();
    });
  }

  const year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());
});

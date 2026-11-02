const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector("#site-navigation");

if (menuToggle && siteNavigation) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menú" : "Cerrar menú");
    siteNavigation.classList.toggle("is-open", !isExpanded);
  });

  siteNavigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
      siteNavigation.classList.remove("is-open");
    }
  });
}

document.querySelectorAll("[data-open-demo]").forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = document.getElementById(button.dataset.openDemo);
    if (!(dialog instanceof HTMLDialogElement)) {
      throw new Error(`No se encontró el diálogo de demo: ${button.dataset.openDemo}`);
    }
    dialog.showModal();
  });
});

document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog")?.close());
});

document.querySelectorAll(".demo-dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});

const menuTabs = document.querySelectorAll("[data-menu-tab]");
const menuItems = document.querySelectorAll("[data-menu-category]");

menuTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.menuTab;
    menuTabs.forEach((item) => item.setAttribute("aria-pressed", String(item === tab)));
    menuItems.forEach((item) => {
      item.toggleAttribute("hidden", item.dataset.menuCategory !== category);
    });
  });
});

const currentYear = document.querySelector("#current-year");
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

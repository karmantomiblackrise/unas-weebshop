"use strict";

window.showToast = function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(window.toastTimeout);
  window.toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
};

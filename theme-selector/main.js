import "./style.css";

document.addEventListener("click", (e) => {
  const themeOption = e.target.closest(".theme-option");
  if (!themeOption) return;

  const themeOptions = document.querySelectorAll(".theme-option");

  themeOptions.forEach((themeOption) =>
    themeOption.classList.remove("is-selected")
  );

  const theme = themeOption.dataset.color;

  let root = document.documentElement;
  root.style.setProperty("--color-primary", theme);
});

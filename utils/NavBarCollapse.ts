export function handleNavBarCollapse() {
  const navbar = document.getElementById("navbar");
  const navbarExpandButton = document.getElementById("navbar-expand-button");
  if (navbar && navbarExpandButton) {
    navbar.classList.remove("navbar-expand");
    navbarExpandButton.classList.remove("navbar-expand-button-expand");
  }
}

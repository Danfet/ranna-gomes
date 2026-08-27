/* ============================================================
   JAVASCRIPT DO SITE
   ============================================================ */

// Menu do celular
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

if(menuBtn){
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}

// Fecha o menu depois que o usuário clica em um item
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

// Animação suave de entrada das seções
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
}, {threshold: .08});

document.querySelectorAll(".method-item, .package, .testimonial, .gallery-item").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(18px)";
  el.style.transition = "opacity .65s ease, transform .65s ease";
  observer.observe(el);
});

// Classe adicionada quando o elemento aparece na tela
const style = document.createElement("style");
style.textContent = `
  .method-item.visible,
  .package.visible,
  .testimonial.visible,
  .gallery-item.visible{
    opacity:1 !important;
    transform:translateY(0) !important;
  }
`;
document.head.appendChild(style);

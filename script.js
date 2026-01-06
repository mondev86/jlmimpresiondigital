document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const menuOverlay = document.querySelector('.menu-overlay');
  const hamburger = document.querySelector('.hamburger');
  
  let isMenuOpen = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
      mobileNav.classList.add('active');
      menuOverlay.classList.add('active');
      hamburger.textContent = 'x';
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      mobileNav.classList.remove('active');
      menuOverlay.classList.remove('active');
      hamburger.textContent = '≡';
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }
  
  // Event listeners
  menuToggle.addEventListener('click', toggleMenu);
  menuOverlay.addEventListener('click', toggleMenu);
  
  // Cerrar menú al hacer clic en links
  const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) toggleMenu();
    });
  });
  
  // Cerrar menú con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      toggleMenu();
    }
  });
  
  // Rellenar menú móvil
  const navItems = document.querySelectorAll('.nav-menu a');
  const mobileNavUl = document.createElement('ul');
  
  navItems.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.textContent;
    a.addEventListener('click', () => {
      if (isMenuOpen) toggleMenu();
    });
    li.appendChild(a);
    mobileNavUl.appendChild(li);
  });
  
  mobileNav.appendChild(mobileNavUl);
});
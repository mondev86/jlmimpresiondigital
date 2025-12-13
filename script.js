document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const desktopNav = document.querySelector('.nav-menu');
  const body = document.body;
  
  // 1. Crear menú móvil
  const mobileNav = desktopNav.cloneNode(true);
  mobileNav.classList.remove('nav-menu');
  mobileNav.classList.add('mobile-nav');
  body.appendChild(mobileNav);
  
  // 2. Crear overlay
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  body.appendChild(overlay);
  
  // 3. Función para abrir/cerrar menú
  function toggleMenu() {
    const isOpen = mobileNav.classList.contains('active');
    
    if (isOpen) {
      // Cerrar
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.innerHTML = '<span class="hamburger">≡</span>';
      body.style.overflow = 'auto';
    } else {
      // Abrir
      mobileNav.classList.add('active');
      overlay.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.innerHTML = '<span class="hamburger">✕</span>';
      body.style.overflow = 'hidden';
    }
  }
  
  // 4. Función para manejar responsive
  function handleResponsive() {
    const width = window.innerWidth;
    
    if (width <= 1024) {
      // Móvil/Tablet - mostrar hamburguesa, ocultar nav
      desktopNav.style.display = 'none';
      menuToggle.style.display = 'flex';
    } else {
      // Desktop - mostrar nav, ocultar hamburguesa y menú móvil
      desktopNav.style.display = 'block';
      menuToggle.style.display = 'none';
      
      // Cerrar menú móvil si está abierto
      if (mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = '<span class="hamburger">≡</span>';
        body.style.overflow = 'auto';
      }
    }
  }
  
  // 5. Event Listeners
  menuToggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
  
  // Cerrar menú al hacer clic en enlace
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
  
  // Cerrar con Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      toggleMenu();
    }
  });
  
  // 6. Inicializar y escuchar cambios
  handleResponsive();
  window.addEventListener('resize', handleResponsive);
  
  // 7. Forzar redibujado en dispositivos específicos
  setTimeout(handleResponsive, 100);
});
const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.mobile-nav');
ham.addEventListener('click', () => {
  const expanded = ham.getAttribute('aria-expanded') === 'true';
  ham.setAttribute('aria-expanded', String(!expanded));
  // ko'rsatish/berkitish
  if (nav.hasAttribute('hidden')) nav.removeAttribute('hidden');
  else nav.setAttribute('hidden', '');
  // headerga class qo'yish (hamburger anim uchun)
  document.querySelector('header').classList.toggle('nav-open');
});

AOS.init();
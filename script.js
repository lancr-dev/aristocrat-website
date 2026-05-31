const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 150) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');

    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

document.querySelectorAll('.carousel-wrapper').forEach((wrapper) => {
  const viewport = wrapper.querySelector('.carousel-viewport');
  const carousel = wrapper.querySelector('.carousel');
  const prevBtn = wrapper.querySelector('.prev');
  const nextBtn = wrapper.querySelector('.next');

  const getScrollAmount = () => {
    const card = carousel.querySelector('.card');
    const gap = parseInt(getComputedStyle(carousel).gap) || 0;

    return card.offsetWidth + gap;
  };

  nextBtn.addEventListener('click', () => {
    viewport.scrollBy({
      left: getScrollAmount(),
      behavior: 'smooth',
    });
  });

  prevBtn.addEventListener('click', () => {
    viewport.scrollBy({
      left: -getScrollAmount(),
      behavior: 'smooth',
    });
  });
});

const items = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
    }
  });
});

items.forEach(i => observer.observe(i));
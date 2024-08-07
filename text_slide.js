const spans = document.querySelectorAll('.auto-text span');
spans.forEach((span, index) => {
  span.style.setProperty('--index', index);
});
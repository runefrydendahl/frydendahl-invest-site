document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.querySelector('.footer-bottom span:first-child');
  if (yearNode) {
    const year = new Date().getFullYear();
    yearNode.textContent = `© ${year} Frydendahl Invest ApS`;
  }
});

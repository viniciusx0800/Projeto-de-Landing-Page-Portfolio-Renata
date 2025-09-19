// voltar para a tela inicial 
document.addEventListener('DOMContentLoaded', function () {
  const topoBtn = document.querySelector('.footer-topo-btn');
  if (topoBtn) {
    topoBtn.addEventListener('click', function (e) {    
    topoBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      topoBtn.classList.add('clicado');
      setTimeout(() => topoBtn.classList.remove('clicado'), 200);
    });
      e.preventDefault();

      
      const scrollStep = 100; 
      const scrollInterval = 30; 

      function scrollUp() {
        if (window.scrollY > 0) {
          window.scrollBy(0, -scrollStep);
          setTimeout(scrollUp, scrollInterval);
        }
      }
      scrollUp();

      topoBtn.classList.add('clicado');
      setTimeout(() => topoBtn.classList.remove('clicado'), 200);
    });
  }
});
window.addEventListener('scroll', () => {
    const scrollDown = document.querySelector('.scroll-down');
    if (!scrollDown) return;
  
    if (window.scrollY > 10) {
      scrollDown.classList.add('hidden');
    } else {
      scrollDown.classList.remove('hidden');
    }
  });
  
  
  
  
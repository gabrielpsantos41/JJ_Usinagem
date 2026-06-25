    window.addEventListener('scroll', function () {
      const navbar = document.querySelector('.navbar');

      if (window.scrollY > 50) {
        navbar.style.padding = '12px 0';
        navbar.style.background = 'rgba(2, 6, 23, 0.98)';
      } else {
        navbar.style.padding = '18px 0';
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
      }
    });


    
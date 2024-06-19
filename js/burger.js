(() => {
    const menuBtn = document.querySelector('.menu-button');
    const menu = document.querySelector('.navigation');
  
    menuBtn.addEventListener('click', function () {
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
    })
  })();
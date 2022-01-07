if (document.querySelector('.promo')) {
  const promo = document.querySelector('.promo');
  const header = document.querySelector('.header');
  const headerXl = document.querySelector('.header-xl');

  window.addEventListener('scroll', function () {
    console.log(pageYOffset)

    if (pageYOffset >= 200) {
      promo.classList.add('promo--absolute');
    } else {
      promo.classList.remove('promo--absolute');
    };

    if (pageYOffset >= 200) {
      header.classList.add('header--dark');
      headerXl.classList.add('header--dark');
    } else {
      header.classList.remove('header--dark');
      headerXl.classList.remove('header--dark');
    }

    // if (pageYOffset >= 1900) {
    //   header.classList.remove('header--dark');
    //   header.classList.add('header--light')
    // }

  });
}



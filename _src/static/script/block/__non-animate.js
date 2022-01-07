const mediaQuery = window.matchMedia('(max-width: 1085px)');


const handleTabletChange = (e) => {

  if (e.matches) {
    const header = document.querySelector('.header');
    const animates = header.querySelectorAll('.animate__animated');

    animates.forEach((animate) => {
      animate.classList.remove("animate__animated")
    })
  }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)




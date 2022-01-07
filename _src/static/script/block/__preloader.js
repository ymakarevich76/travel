if (document.querySelector('.preloader')) {
  const preloader = document.querySelector('.preloader');

  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add('preloader--hidden');
    }, 3000)
  });
}

function smoothScrollTo(url) {
  document.querySelector(url).scrollIntoView({
    behavior: "smooth",
  });
}

export default smoothScrollTo;

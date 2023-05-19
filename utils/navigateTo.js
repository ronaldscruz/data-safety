import router from "next/router";

function navigateTo(url) {
  if (url.includes("#")) {
    document.querySelector(url).scrollIntoView({
      behavior: "smooth",
    });
  }

  if (url.includes("/")) {
    router.push(url);
  }
}

export default navigateTo;

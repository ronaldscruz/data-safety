import router from "next/router";

function navigateTo(url) {
  if (url.includes("#")) {
    const targetElement = document.querySelector(url)
    
    if (!targetElement) {
      console.error(`[navigation] element or url "${url}" not found.`);
      return;
    }
    
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  }
  
  if (url.includes("/")) {
    router.push(url);
  }
}

export default navigateTo;

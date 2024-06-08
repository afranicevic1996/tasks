class CustomElement extends HTMLElement {
  constructor () {
    super();
  }

  connectedCallback() {
    let customElem = this;
    let textContainer = customElem.querySelector(".text-container");

    let handleVisibility = function (elem) {
      if (elem[0].isIntersecting) {
        customElem.classList.remove("hidden");
        textContainer.classList.add("fadeIn");
      }
      else {
        customElem.classList.add("hidden");
        textContainer.classList.remove("fadeIn");
      }
    }


    const observer = new IntersectionObserver(handleVisibility);
    observer.observe(customElem);
  }
}

customElements.define("custom-element", CustomElement);
/*
let container = document.querySelector(".container");
let textContainer = document.querySelector(".text-container");

let handleVisibility = function (elem) {
  console.log(elem)
  // Check if the element is intersecting the viewport
  if (elem[0].isIntersecting) {
    console.log("target visible");
    container.classList.remove("hidden");
    textContainer.classList.add("fadeIn");
  }
  else {
    console.log("target hidden");
    container.classList.add("hidden");
    textContainer.classList.remove("fadeIn");
  }
}


const observer = new IntersectionObserver(handleVisibility);
observer.observe(container);
*/
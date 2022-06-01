document.addEventListener("DOMContentLoaded", (e) => {
  let imgs = Array.prototype.slice.call(document.querySelectorAll("img"));
  let timeout;
  imgs.forEach(img => {
    img.addEventListener("mouseenter", (e) => {
      console.log("hi")
      timeout = setTimeout(() => {
        img.nextElementSibling.style.display = "block"
      }, 2000);
    }, true)

    img.addEventListener("mouseout", (e) => {
      console.log("bye")
      clearTimeout(timeout)
      img.nextElementSibling.style.display = "none"
    })
  });
});
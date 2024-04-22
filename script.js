const prevBtn = document.getElementById("leftBtn");
const nextBtn = document.getElementById("rightBtn");
const mainContent = document.querySelector(".main-content");
const cardWidth = mainContent.querySelector(".card").offsetWidth;
let scrollAmount = 0;

nextBtn.addEventListener("click", () => {
  const maxScroll = mainContent.scrollWidth - mainContent.offsetWidth;
  scrollAmount = Math.min(scrollAmount + cardWidth, maxScroll);
  mainContent.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", () => {
  scrollAmount = Math.max(scrollAmount - cardWidth, 0);
  mainContent.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
});

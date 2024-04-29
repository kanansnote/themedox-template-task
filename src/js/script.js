// Slider for .hotBidsCards section using swiper.js

const trendingSwiper = new Swiper('.topTrendingContainer', {
  slidesPerView: 'auto', // Adjust this value to control how many slides are visible at a time
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Back to Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";  /* Show button when scrolled down */
  } else {
    topBtn.style.display = "none";   /* Hide button when scrolled up */
  }
}

topBtn.addEventListener("click", function() {
  document.documentElement.scrollIntoView({
    behavior: 'smooth',  // Enables smooth scrolling animation
    block: 'start'       // Scrolls to the top of the page
  });
});

// Slider for .gallery section using swiper.js

const gallerySwiper = new Swiper('.Gallery', {
  slidesPerView: '3', // Adjust this value to control how many slides are visible at a time
  centeredSlides: true,
  loop: true,
});

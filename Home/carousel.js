document.addEventListener("DOMContentLoaded", () => {
  // --- TOP CAROUSEL ---
  const topSlides = document.querySelectorAll('.banner-top-slide');
  const dots = document.querySelectorAll('.dot');
  let topIndex = 0;

  if (topSlides.length > 0) {
    setInterval(() => {
      topSlides[topIndex].classList.remove('active');
      if (dots[topIndex]) dots[topIndex].classList.remove('active');
      
      topIndex = (topIndex + 1) % topSlides.length;
      
      topSlides[topIndex].classList.add('active');
      if (dots[topIndex]) dots[topIndex].classList.add('active');
    }, 3500);
  }

  // --- MIDDLE PROMO CAROUSEL ---
  const midSlides = document.querySelectorAll('.banner-mid-slide');
  let midIndex = 0;

  if (midSlides.length > 0) {
    setInterval(() => {
      midSlides[midIndex].classList.remove('active');
      midIndex = (midIndex + 1) % midSlides.length;
      midSlides[midIndex].classList.add('active');
    }, 5000);
  }
});

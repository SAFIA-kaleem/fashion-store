// 1. Mobile Navigation Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// 2. Automatic Hero Background Image Slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Har 4 seconds baad image change hogi
setInterval(nextSlide, 4000);

// 3. Interactive "Add to Cart" Buttons
const cartButtons = document.querySelectorAll('.cart-btn');

cartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const productCard = e.target.closest('.product-card');
    const productName = productCard.querySelector('h4').innerText;
    
    const originalText = button.innerText;
    button.innerText = 'Added! ✓';
    button.style.backgroundColor = '#28a745';
    
    alert(`🎉 Success! "${productName}" has been added to your cart.`);
    
    setTimeout(() => {
      button.innerText = originalText;
      button.style.backgroundColor = '#1a1a1a';
    }, 2000);
  });
});

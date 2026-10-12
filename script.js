// 1. Mobile Navigation Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// 2. Interactive "Add to Cart" Buttons
const cartButtons = document.querySelectorAll('.cart-btn');

cartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    // Product ka naam nikalna
    const productCard = e.target.closest('.product-card');
    const productName = productCard.querySelector('h4').innerText;
    
    // Button ka style aur text temporarily change karna
    const originalText = button.innerText;
    button.innerText = 'Added! ✓';
    button.style.backgroundColor = '#28a745';
    
    // Notification dena
    alert(`🎉 Success! "${productName}" has been added to your cart.`);
    
    // 2 second baad button ko wapas apni original halat mein laana
    setTimeout(() => {
      button.innerText = originalText;
      button.style.backgroundColor = '#1a1a1a';
    }, 2000);
  });
});
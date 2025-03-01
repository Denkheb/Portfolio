function toggleNav() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-open');
}

document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); 


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';
    
  
    if (!name || !email || !password) {
      errorMessage.textContent = 'All fields are required.';
      return;
    }
  
    if (!validateEmail(email)) {
      errorMessage.textContent = 'Please enter a valid email address.';
      return;
    }
  
    if (password.length < 6) {
      errorMessage.textContent = 'Password must be at least 6 characters long.';
      return;
    }
  
    
    alert('Form submitted successfully!');
    
  });
  
  
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
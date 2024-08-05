document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Thank you for your message! We will get back to you soon.");
      form.reset();
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const menuCheckbox = document.getElementById('menu-checkbox');
    const navUl = document.querySelector('nav ul');
    
    menuCheckbox.addEventListener('change', function () {
      if (menuCheckbox.checked) {
        navUl.style.display = 'flex';
      } else {
        navUl.style.display = 'none';
      }
    });
  });
  

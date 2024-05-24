document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault(); 
      event.stopPropagation(); 
      
      document.querySelectorAll('.dropdown-content').forEach(drop => {
        if (drop !== this.nextElementSibling) {
          drop.style.display = 'none';
        }
      });
  
      const dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      } else {
        dropdownContent.style.display = 'block';
      }
    });
  });
  
  window.addEventListener('click', function() {
    document.querySelectorAll('.dropdown-content, .date-picker').forEach(drop => {
      drop.style.display = 'none';
    });
  });
  
  
  
  function signUpForTour() {
    alert('Ви обрали цей тур!');
  }
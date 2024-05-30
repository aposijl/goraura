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
  
  var modalComment = document.getElementById("modalComment");
  
  var commentButtons = document.querySelectorAll(".comment-button");
  
  var span = document.getElementsByClassName("close")[0];
  
  
  commentButtons.forEach(function(btn) {
    btn.onclick = function() {
      modalComment.style.display = "block";
    }
  });
  
  span.onclick = function() {
    modalComment.style.display = "none";
  }
  
  
  var modalTour = document.getElementById("modalTour");
  
  var tourButtons = document.querySelectorAll(".tour-button");
  
  var spanTour = modalTour.getElementsByClassName("close")[0];
  
  tourButtons.forEach(function(btn) {
    btn.onclick = function() {
      modalTour.style.display = "block";
    }
  });
  
  spanTour.onclick = function() {
    modalTour.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modalComment) {
      modalComment.style.display = "none";
    } else if (event.target == modalTour) {
      modalTour.style.display = "none";
    }
  }
  
function toggleFullPath() {
    var fullPath = document.querySelector('.full-path');
    var toggleButton = document.querySelector('.toggle-button'); 

    if (fullPath.style.display === 'none' || fullPath.style.display === '') {
        fullPath.style.display = 'flex';
        toggleButton.textContent = 'менше'; 
    } else {
        fullPath.style.display = 'none';
        toggleButton.textContent = 'повний маршрут'; 
    }
}

  
  function toggleAccordion(event) {
    const itemHeader = event.target;
    const itemContent = itemHeader.nextElementSibling;

    if (itemContent.style.display === 'block') {
        itemContent.style.display = 'none';
        itemHeader.querySelector('.icon').textContent = '+';
    } else {
        itemContent.style.display = 'block';
        itemHeader.querySelector('.icon').textContent = '-';
    }
}


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


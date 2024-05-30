document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.querySelector('.toggle-button');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            var moreComments = document.querySelector('.more-comments');
            if (moreComments.style.display === 'none' || moreComments.style.display === '') {
                moreComments.style.display = 'flex';
                this.textContent = 'менше'; 
            } else {
                moreComments.style.display = 'none';
                this.textContent = 'більше'; 
            }
        });
    }
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

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
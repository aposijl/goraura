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

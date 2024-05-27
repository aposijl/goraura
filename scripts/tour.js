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

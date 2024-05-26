function toggleFullPath() {
    var fullPath = document.querySelector('.full-path');
    if (fullPath.style.display === 'none' || fullPath.style.display === '') {
        fullPath.style.display = 'flex';
    } else {
        fullPath.style.display = 'none';
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

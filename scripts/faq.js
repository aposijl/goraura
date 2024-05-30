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

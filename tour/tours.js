const accordionItems = document.getElementById('accordion-item');

accordionItems.forEach((item) => {
    const accordionButton = item.getElementById('accordion-button');
    const accordionContent = item.getElementById('accordion-content');

    accordionButton.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});







document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('#accordion-item');

    accordionItems.forEach((item) => {
        const accordionButton = item.querySelector('.MuiAccordionSummary-root');

        accordionButton.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});
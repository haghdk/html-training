const footerYear = document.querySelector('.footer-year');
const date = new Date();
const currentYear = date.getFullYear();
footerYear.textContent = currentYear.toString();

const websiteTitle = "My Awesome Website"
const titleElements = document.querySelectorAll('.website-title');

titleElements.forEach(item => {
    item.textContent = websiteTitle;
});
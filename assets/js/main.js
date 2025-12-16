// Mobile Menu Toggle
let menuToggle = document.querySelector('#menu-toggle');
menuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    
    const mainNav = document.querySelector('.main-nav');

    this.classList.toggle('menu-opened');
    mainNav.classList.toggle('menu-opened');
});

// Mobile Menu Panel

// Dropdown Menu
// Dropdown toggle
document.querySelectorAll('.has-child-menu > a').forEach(toggle => {  
    toggle.addEventListener('click', e => {
        const href = toggle.getAttribute('href');
        // Only prevent default if href is '#' or empty
        if (!href || href === '#') {
            e.preventDefault();
        }

        dropdown = toggle.parentElement;
        dropdown.classList.toggle('submenu-opened');
    });
});

document.querySelectorAll('.has-child-menu .toggle-icon').forEach(toggle => {
    toggle.addEventListener('click', e => {
        e.preventDefault();

        dropdown = toggle.parentElement;
        dropdown.classList.toggle('submenu-opened');
    });
});

// Close dropdowns when clicking elsewhere
document.addEventListener('click', e => {
    document.querySelectorAll('.has-child-menu').forEach(drop => {
        if (!drop.contains(e.target)) drop.classList.remove('submenu-opened');
    });
});


// Append Parameters
function appendParamsToLinks() {
  const spkUrlParams = new URLSearchParams(window.location.search);
  if (spkUrlParams.toString()) {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      const baseHref = link.getAttribute('href');
      const separator = baseHref.includes('?') ? '&' : '?';
      const newHref = baseHref + separator + spkUrlParams.toString();
      link.setAttribute('href', newHref);
    });
  }
}

appendParamsToLinks();

// Current Date
const currentDate = new Date();

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const monthIndex = currentDate.getMonth();
const monthName = monthNames[monthIndex];

const year = currentDate.getFullYear();

const monthElements = document.getElementsByClassName("current_month");
const yearElements = document.getElementsByClassName("current_year");

for (let i = 0; i < monthElements.length; i++) {
    monthElements[i].textContent = monthName;
}

for (let i = 0; i < yearElements.length; i++) {
    yearElements[i].textContent = year;
}
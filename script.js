function clickToLinkedIn() { 
    alert("You are about to be redirected to linkedin.com"); 
} 
function makeOblique() {
    var elementId = document.getElementById("personal-info");
    if(elementId.style.fontStyle != "oblique") elementId.style.fontStyle = "oblique";
    else elementId.style.fontStyle = "initial";
}

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');

  if (!navToggle || !navLinks) {
    console.error('Navbar elements not found. Check IDs: #navToggle and #navLinks');
    return;
  }

  // Explicit click handler
  navToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-active');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close when clicking any menu link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside tap
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
      navLinks.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

const timelineBtn = document.getElementById('timelineToggleBtn');
const timelineContent = document.getElementById('timelineExpandable');
const toggleText = timelineBtn?.querySelector('.toggle-text');

if (timelineBtn && timelineContent) {
  timelineBtn.addEventListener('click', () => {
    const isExpanded = timelineBtn.getAttribute('aria-expanded') === 'true';
    
    timelineBtn.setAttribute('aria-expanded', String(!isExpanded));
    timelineContent.setAttribute('aria-hidden', String(isExpanded));
    
    timelineBtn.classList.toggle('is-active');
    timelineContent.classList.toggle('is-expanded');

    if (toggleText) {
      toggleText.textContent = isExpanded ? 'Show More Activities' : 'Show Less Activities';
    }
  });
}
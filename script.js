var nav = document.getElementById('nav');
window.addEventListener('scroll', function() {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});
function toggleMenu() {
  document.getElementById('mob').classList.toggle('open');
}
var obs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e, i) {
    if (e.isIntersecting) {
      setTimeout(function() { e.target.classList.add('on'); }, i * 80);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.06 });
document.querySelectorAll('.reveal').forEach(function(r) { obs.observe(r); });

var mcats = document.querySelectorAll('.mcat');
var catSections = document.querySelectorAll('[id^="cat-"]');
function updateActiveCat() {
  var scrollY = window.scrollY + 160;
  var current = 'cat-burgers';
  catSections.forEach(function(s) {
    if (s.offsetTop <= scrollY) current = s.id;
  });
  mcats.forEach(function(c) {
    c.classList.remove('active');
    if (c.getAttribute('href') === '#' + current) c.classList.add('active');
  });
}
window.addEventListener('scroll', updateActiveCat);
mcats.forEach(function(c) {
  c.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({top: target.offsetTop - 140, behavior: 'smooth'});
    }
  });
});

function handleSubmit() {
  var b = document.querySelector('.fsub');
  b.textContent = '\u2713 Message Sent!';
  b.style.background = '#1a6b3a';
  b.style.borderColor = '#1a6b3a';
  b.disabled = true;
  setTimeout(function() {
    b.textContent = 'Send Message \u2192';
    b.style.background = '';
    b.style.borderColor = '';
    b.disabled = false;
  }, 4000);
}

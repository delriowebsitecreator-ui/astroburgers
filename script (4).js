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

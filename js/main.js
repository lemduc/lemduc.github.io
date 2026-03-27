function toggleSection(btn, id) {
  var section = document.getElementById(id);
  var isHidden = section.classList.contains('hidden-section');
  
  if (isHidden) {
    section.classList.remove('hidden-section');
    btn.setAttribute('aria-expanded', 'true');
    btn.querySelector('.toggle-icon').textContent = '▼';
  } else {
    section.classList.add('hidden-section');
    btn.setAttribute('aria-expanded', 'false');
    btn.querySelector('.toggle-icon').textContent = '▶';
  }
}

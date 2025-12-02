
/* Navigation toggle for small screens */
document.addEventListener('DOMContentLoaded', function(){
  function bindToggle(btnId, listId){
    const btn = document.getElementById(btnId);
    const list = document.getElementById(listId);
    if(!btn || !list) return;
    btn.addEventListener('click', ()=>{
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      list.classList.toggle('show');
    });
  }
  bindToggle('nav-toggle','nav-list');
  bindToggle('nav-toggle-2','nav-list-2');
  bindToggle('nav-toggle-3','nav-list-3');
  bindToggle('nav-toggle-4','nav-list-4');
  bindToggle('nav-toggle-5','nav-list-5');

  // contact form fallback: open mail client
  window.handleContact = function(e){
    e.preventDefault();
    const name = document.getElementById('name').value || '';
    const email = document.getElementById('email').value || '';
    const message = document.getElementById('message').value || '';
    const subject = encodeURIComponent('Contato pelo site - ' + name);
    const body = encodeURIComponent(message + "\n\nContato: " + email);
    const mailto = 'mailto:cienciadedados.evelin@gmail.com?subject=' + subject + '&body=' + body;
    window.location.href = mailto;
    alert('Seu cliente de e-mail será aberto para enviar a mensagem.');
  }
});

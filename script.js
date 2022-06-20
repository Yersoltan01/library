document.querySelector('#books').addEventListener('click', function(e) {
  if (e.target && e.target.matches('.book-status')) {
    document.querySelector(`#${e.target.id}`).classList.toggle('read');
  }
})


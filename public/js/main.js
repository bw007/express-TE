window.addEventListener('DOMContentLoaded', function() {
  const modalTriggers = document.querySelectorAll('.todo-item__action--delete');
  const modal = document.querySelector('#deleteModal');
  const modalOverlay = document.querySelector('.modal__overlay');
  const modalDesc = document.querySelector('.modal__desc');
  const modalCancel = document.querySelector('.modal__btn--cancel');
  const modalConfirm = document.querySelector('.modal__btn--danger');

  let currentTodoId = null;

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      currentTodoId = this.dataset.id;
      modalDesc.textContent = this.dataset.name;
      modal.classList.add('active');
      modalOverlay.classList.add('active');
    });
  });

  if (modalCancel) {
    modalCancel.addEventListener('click', function() {
      modal.classList.remove('active');
      modalOverlay.classList.remove('active');
    });
  }

  if (modalConfirm) {
    modalConfirm.addEventListener('click', function() {   
      if (currentTodoId) {
        fetch(`/task/${currentTodoId}/delete`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
            window.location.reload();            
          } else {
            console.error(response.statusText);
          }
        })
        .catch(error => console.error('Error:', error));
      }
    });
  }
});
window.addEventListener('DOMContentLoaded', function() { 
    // Modal
   const modalTrigger = document.querySelectorAll('[data-modal]'),
         modal = document.querySelector('.modal');

   modalTrigger.forEach(btn => {
       btn.addEventListener('click', openModal);
   });

   function closeModal() {
       modal.classList.add('hide');
       modal.classList.remove('show');
       document.body.style.overflow = '';
   }

   function openModal() {
      modal.classList.add('show');
       modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
   }

   modal.addEventListener('click', (e) => {
       if (e.target === modal || e.target.getAttribute('data-close') == '' ) {
           closeModal();
       }
   });

   document.addEventListener('keydown', (e) => {
       if (e.code === "Escape" && modal.classList.contains('show')) { 
           closeModal();
       }
   });

   //Validat
   const form = document.querySelector('.form1')

    Array.from(form.elements).forEach(inp => {
        if(inp.required && inp.type != 'checkbox') {
            inp.addEventListener('change', () => {
                if(inp.checkValidity()) {
                    inp.classList.remove('invalid')
                    inp.classList.add('valid')
                } else {
                    inp.classList.remove('valid')
                    inp.classList.add('invalid')
                    inp.reportValidity()
                }
            })
        }
    })
});
/*$(document).ready(function(){

   

        alert('Na terra de Mordor onde as sombras se deitam!')

        $(document).content-outer(function(){

            background-Image 
        })
   
   
})*/

document.querySelectorAll('.submenu-toggle').forEach(toggle => {
    toggle.addEventListener('click', (event) => {
      event.preventDefault(); // Previne o comportamento padrão do link
      const submenu = toggle.nextElementSibling;
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
  });
  
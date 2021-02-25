window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');

   setTimeout(() => {
       transition_el.classList.remove('is-active');
   }, 500);

   for (let index= 0; index < anchors.length; index++) {
       const anchor = anchors[index];
       
   }
} 
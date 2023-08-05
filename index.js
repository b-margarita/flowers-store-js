gsap.from('.header', {duration: 2.5,  y: -100, opacity: 0, delay: 1, ease: 'back'})
gsap.from('.link', {opacity: 0, duration: 2.8, delay: 1, stagger: 0.6})
gsap.from('h1',{y: 30, duration: 3, opacity: 0, delay: 3})
gsap.from('.container', {x: 100, opacity: 0, duration: 3, delay: 4})

const items = document.querySelectorAll('.item');
console.log(items);

 items.forEach(item => {
         item.addEventListener('mouseover', () => {
         removeFocus();
         item.classList.add('selected');
     })

 removeFocus = () => {
         items.forEach(item => {
         item.classList.remove('selected');
         })
     }
 })



AOS.init();
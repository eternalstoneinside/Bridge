// ------------------------------switchBtns
const switchBtns = document.querySelectorAll('.item-making__button')

switchBtns.forEach(function (btn) {
   // Вешаем событие клик
   btn.addEventListener('click', function () {
      btn.classList.toggle('_active')
   })
})




// ------------------------------number+
const time = 10000;
const step = 1;

function outNum(num, elem) {
   let e = document.querySelector("#out");
   n = 24999920;
   let t = Math.round(time / (num / step));
   let interval = setInterval(() => {
      n = n + step;
      if (n == num) {
         clearInterval(interval);
      }
      e.innerHTML = n;
   }, t);
}

outNum(100, "#out");


// ------------------------------buttonTop
const goTopBtn = document.querySelector('.footer__top');

goTopBtn.addEventListener('click', goTop);

function goTop() {
   if (window.pageYOffset > 0) {
      window.scrollBy(0, -15);
      setTimeout(goTop, 0);
   }
}


// ------------------------------animScroll
const animItems = document.querySelectorAll('._anim-items')

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll)
   function animOnScroll(params) {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 2;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_activated');
         } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
               animItem.classList.remove('_activated');
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   setTimeout(() => {
      animOnScroll();
   }, 300);
}
// ------------------------------ParallaxEfect
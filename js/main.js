// Fixed header on scroll
// FIX-ME

window.addEventListener('scroll', () => {
  const offset = 650;
  const nav = document.getElementById('header');

  nav.classList.toggle(
    'header-fixed',
    document.body.scrollTop > offset ||
    document.documentElement.scrollTop > offset
  );
  // if (document.body.scrollTop > offset ||
  //   document.documentElement.scrollTop > offset) {
  //   nav.classList.add('header-fixed');
  // } else {
  //   nav.classList.remove('header-fixed');
  // }
});

// window.addEventListener('scroll', event => {
//   const offset = 600;
//   const { scrollTop } = event.target.scrollingElement;

//   document.querySelector('#header').classList.toggle('header-fixed', scrollTop >= offset);
// });


// ________________________________________________________
// Change active menu items on scrolling

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       document.querySelectorAll('.nav-list__item-link').forEach((link) => {
//         if (link.getAttribute('href').replace('#', '') === entry.target.id) {
//           link.classList.add('nav-list__item--active');
//         } else {
//           link.classList.remove('nav-list__item--active');
//         }
//       });
//     }
//   });
// }, {
//   threshold: 0.5,
// });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-list__item-link').forEach((link) => {
        link.classList.toggle(
          'nav-list__item--active',
          link.getAttribute('href').replace('#', '') === entry.target.id
        );
      });
    }
  });
}, {
  threshold: 0.5,
});

document.querySelectorAll('.section').forEach(
  (section) => observer.observe(section),
);









// ________________________________________________________
// Btn scroll up

// При скроллі викликаємо функ-ю scrollFunction
window.onscroll = () => {
  scrollFunction();
};

scrollFunction = () => {
  const offset = 550;
  const btnScroll = document.querySelector(".scroll_btn");

  // Умова, якщо скролл > offset, додаємо класс і навпаки
  // || - може бути один операнд true
  // && - всі операнди мають бути true
  if (
    document.body.scrollTop > offset ||
    document.documentElement.scrollTop > offset
  ) {
    btnScroll.classList.add("scroll_btn--active");
  } else {
    btnScroll.classList.remove("scroll_btn--active");
  }
};

// scrollupFunction - нова функція, при натисканні скролл наверх
// When the user clicks on the button, scroll to the top
scrollupFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, Opera, IE
};



// ________________________________________________________
// Hide btn up before footer

const checkOffset = () => {
  const scrollBtn = document.querySelector(".scroll_btn");
  const footer = document.querySelector("#footer");

  // getRectTop - функ-я яка повертає rect.top
  // getBoundingClientRect - пПовертає розмір елемента та його положення відносно вікна перегляду
  const getRectTop = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top;
  };

  // Коли кнопка перетинає футре - hide btn
  // Коли кнопка не перетинає футер - show btn
  if (
    getRectTop(scrollBtn) + document.body.scrollTop + scrollBtn.offsetHeight >=
    getRectTop(footer) + document.body.scrollTop
  )
    scrollBtn.style.position = "absolute"; // hide btn before footer
  if (
    document.body.scrollTop + window.innerHeight <
    getRectTop(footer) + document.body.scrollTop
  )
    scrollBtn.style.position = "fixed"; // show btn when you scroll up
};

// При скроллі спрацьовує функ-я checkOffset
document.addEventListener("scroll", () => {
  checkOffset();
});

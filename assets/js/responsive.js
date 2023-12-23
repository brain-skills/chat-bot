// Получаем meta-тег
let meta = document.createElement('meta');

// Получаем ширину viewport
let width = window.innerWidth;
const tabletWidth = 768; // планшетная версия
const mobileMax = 576;

// Для мобильных < 576px
if(width < 576) {
    // зададим viewport через meta-тег, как для мобильных
    meta.name = 'viewport';
    meta.content = 'width=576'; 
    document.head.appendChild(meta);
    // toggleMobileMenu();
}

// Планшеты от 576 до 768
else if(width >= 576 && width < 768) {
    // зададим viewport через meta-тег, как для планшетов
    meta.name = 'viewport';
    meta.content = 'width=768'; 
    document.head.appendChild(meta);
    // showTabletWidgets();  
}

// Десктопы от 768 и выше 
else {
    // зададим viewport через meta-тег, как для планшетов
    meta.name = 'viewport';
    document.head.appendChild(meta);
    // showDesktopWidgets();
}

// При изменении размера окна
// window.addEventListener('resize', function() {
//   // получаем новую ширину
//   let width = window.innerWidth;
  
//   // обрабатываем сценарии
//   if(width < 576) {
//     toggleMobileMenu();
//   }
// })

// 360px — базовая адаптация под мобильные устройства.
// 576px — разрешение смартфонов вертикальной ориентации.
// 768px — планшеты, ландшафтная ориентация смартфонов.
// 992px — небольшие десктопы и планшеты большего размера.
// 1200px — стандартная ширина контента веб-страниц.

// if (width < 576) {
//     // стили для мобильного
//   } else if (width < 768) { 
//     // стили для планшетов  
//   } else {
//     // стили для десктопа
// }
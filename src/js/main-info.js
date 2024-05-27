// Импортируем библиотеку GSAP
const { gsap } = window;

// Находим элемент с классом main-info__title
const titleElement = document.querySelector('.main-info__title');

// Разбиваем текст на слова и оборачиваем каждое слово в span
const words = titleElement.textContent.split(' ');
const htmlWithSpans = words.map(word => `<span>${word}</span>`).join(' ');

// Заменяем содержимое элемента на новый HTML-код
titleElement.innerHTML = htmlWithSpans;

// Находим все <span> внутри блока main-info__title
const spanElements = Array.from(document.querySelectorAll('.main-info__title span'));

// Создаем анимацию для каждого <span>
const animations = spanElements.map((span, index) => {
    const animation = gsap.fromTo(span, {
        opacity: 0.05, // Начальная прозрачность 0
    }, {
        opacity: 1, // Конечная прозрачность 1
        duration: 0.5, // Продолжительность анимации (0.5 секунды)
        ease: 'power1.inOut', // Эффект анимации
        paused: true, // Анимация стартует с паузой
    });
    return animation;
});

let lastScrollY = 0; // Переменная для хранения предыдущей позиции скролла

// Обработчик события прокрутки страницы
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const blockTop = document.querySelector('.main-info').getBoundingClientRect().top;
    const blockHeight = document.querySelector('.main-info').clientHeight;

    // Определите текущее положение блока в видимой области страницы
    const blockScrollPosition = Math.max(0, Math.min(1, (scrollY - blockTop) / blockHeight));

    // Воспроизвести анимацию, только если spanIndex находится в допустимом диапазоне
    const spanIndex = Math.floor(blockScrollPosition * spanElements.length);

    // Запускаем анимацию только для текущего <span> и завершаем анимации для предыдущих и следующих <span>
    for (let i = 0; i < animations.length; i++) {
        if (i === spanIndex) {
            animations[i].progress(blockScrollPosition);
        } else {
            animations[i].progress(i < spanIndex ? 1 : 0);
        }
    }

    lastScrollY = scrollY;
});

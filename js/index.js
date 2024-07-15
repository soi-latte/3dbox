const frame = document.getElementById('frame');
const card = document.getElementById('card');
const light = document.getElementById('light');
const tooltip = document.getElementById('tooltip');

let {x, y, width, height} = frame.getBoundingClientRect();

function mouseMove(e) {
    const left = e.clientX - x;
    const top = e.clientY - y;
    const centerX = left - width / 2;
    const centerY = top - height / 2;
    const d = Math.sqrt(centerX ** 2 + centerY ** 2);

    card.style.boxShadow = `${-centerX / 5}px ${-centerY / 10}px 10px rgba(0, 0, 0, 0.2)`;

    card.style.transform = `rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 8}deg)`;
    tooltip.style.transform = `rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 16}deg)`;

    light.style.backgroundImage = `radial-gradient(circle at ${left}px ${top}px, #1473e630, #ffffff00, #ffffff99)`;
}

frame.addEventListener('mouseenter', () => {
    frame.addEventListener('mousemove', mouseMove);
})

frame.addEventListener('mouseleave', () => {
    frame.removeEventListener('mousemove', mouseMove);
    card.style.boxShadow = '';
    card.style.transform = '';
    tooltip.style.transform = '';
    light.style.backgroundImage = '';
})

window.addEventListener('resize', () => {
    rect = frame.getBoundingClientRect();
    x = rect.x;
    y = rect.y;
    width = rect.width;
    height = rect.height;
})

window.addEventListener('load', () => {
    rect = frame.getBoundingClientRect();
    x = rect.x;
    y = rect.y;
    width = rect.width;
    height = rect.height;
})

window.addEventListener('scroll', () => {
    rect = frame.getBoundingClientRect();
    x = rect.x;
    y = rect.y;
    width = rect.width;
    height = rect.height;
})

/*main ani.js*/

function visualAni() {
    let txt = document.querySelectorAll('.visual-box');

    function visualBox() {
        for (let j = 0; j < txt.length; j++) {
            if (window.innerHeight > txt[j].getBoundingClientRect().top) {
                txt[j].classList.add('ani');
            } else if (window.innerHeight < txt[j].getBoundingClientRect().top) {
                txt[j].classList.remove('ani');
            }
        }
    }

    function event_listener() {
        window.addEventListener('load', visualBox);
        window.addEventListener('scroll', visualBox);
        window.addEventListener('resize', visualBox);
    }

    function init() {
        event_listener();
    }

    init();
}

new visualAni;

const appSwiper = new Swiper('.appSlide', {
    // Optional parameters
    loop: true,
    slidesPerView: 7,
    autoplay: {
        delay: 0,
        pauseOnMouseEnter: false,
        disableOnInteraction: false,
    },
    speed: 6000,
    allowTouchMove: false,
    breakpoints: {
        320: {},
        640: {}
    }
});

const dashboardSwiper = new Swiper('.dashboardSlide', {
    loop: false,
    speed: 3500,
    slidesPerView: 1,
    autoplay: true,
    effect: 'cube',
    cubeEffect: {
        slideShadows : true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },
});

const popSwiper = new Swiper('.popSlide', {
    loop: false,
    speed: 3500,
    slidesPerView: 1,
    autoplay: true,
    effect: 'panorama',
    panoramaEffect: {
        depth: 200,
        rotate: 30,
        transitionDuration: 300
    },

})

const erpSwiper = new Swiper('.erpSlide', {
    loop: false,
    speed: 3500,
    slidesPerView: 1,
    autoplay: true,
    effect: 'coverflow',
    coverflowEffect: {
        depth: 100,
        rotate: 55,
        scale: 1,
        stretch: 0,
        modifier: 1,
        slideShadows: true,
        transitionDuration: 300
    },


})





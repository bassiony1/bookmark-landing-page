const burger_icon = document.querySelector('.burger-icon');
const close_icon = document.querySelector('.close-icon');


// NavBar
burger_icon.addEventListener('click' , ()=> {
    burger_icon.classList.add('active');
    burger_icon.closest('.nav').classList.add('fixed');

})
close_icon.addEventListener('click' , ()=> {
    burger_icon.classList.remove('active');
    burger_icon.closest('.nav').classList.remove('fixed');

})

window.addEventListener('resize' , (e)=>{
    if(window.innerWidth > 700)
    {
        burger_icon.classList.remove('active');
    burger_icon.closest('.nav').classList.remove('fixed');
    

    }
    
})




// Taps
const tap_links = [...document.querySelectorAll('.tap__title')];
const taps = [...document.querySelectorAll('.tap')];

tap_links.forEach((t)=> {
    t.addEventListener('click' , (e)=>{
        removeActive();
        t.classList.add('active');
        removeDisplay();
        taps[e.target.dataset.number-1].classList.add('active');
    })
})

function removeActive() {
    tap_links.forEach((t)=>{
        t.classList.remove('active');
    })
}
function removeDisplay() {
    taps.forEach(t => {
        t.classList.remove('active');
    })
}

// FAQ 

const questions = [...document.querySelectorAll('.q')];

questions.forEach(q=>{
    q.addEventListener('click', (e)=>{
        e.target.closest('.faq').querySelector('.ans').classList.toggle('show');
        e.target.closest('.faq').querySelector('.icon-arrow').classList.toggle('rotate');
    })
})
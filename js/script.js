const star = document.querySelector('.star');
const moon = document.querySelector('.moon');
const behind = document.querySelector('.behind');
const front = document.querySelector('.front');

const text = document.querySelector('.text');
const btn = document.querySelector('.btn');

const centerText =document.querySelector('.centerText')
const img = document.querySelector('.img')
window.addEventListener('scroll' , e=> {
    let value = window.scrollY;
    
    star.style.left = value * 2.5 + 'px';
    
    moon.style.top = value * 0.5 + 'px'
    
    behind.style.top = value * 0.5 + 'px'
    
    front.style.top = value * 0 + 'px'
    
    text.style.left = value * 1 + 'px'
    text.style.top = value * 1 + 'px'
    
    btn.style.top = value * .5 + 'px'
    
    centerText.classList.toggle('activeText' , value > 300)
    
    img.classList.toggle('activeImg' , value > 300)
    
    
})


const toggle = document.querySelector('.toggle')
const list = document.querySelector('.list')
toggle.addEventListener('click' , e => {
    e.preventDefault();
    list.classList.toggle('activeNav')
    
})
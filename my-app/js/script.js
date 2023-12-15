



//scroll sections
let sections = document.querySelectorAll('section');




window.onscroll = () => {
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}
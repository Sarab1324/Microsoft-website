const article = document.querySelector('article');
const arrow = document.querySelector('.b');
const arrow2 = document.querySelector('.a');

arrow.addEventListener('click', function(){
    article.classList.add('cct1')
    // article.classList.add('cct1');
    article.classList.add('slide');
    article.classList.remove('slide2');

})
arrow2.addEventListener('click', function(){
    // article.classList.add('cct1');
    article.classList.add('slide2');
    article.classList.remove('slide');

})
let boxBtn = document.querySelector('#box-btn');
let navList = document.querySelector("#nav-list");
let times = document.querySelector('#times');



boxBtn.addEventListener('click', function(){
    navList.style.display = 'block';
    times.style.display = 'block';
    boxBtn.style.display = 'none';

})


times.addEventListener('click', function(){
    navList.style.display = 'none';
    boxBtn.style.display = 'block';
    times.style.display = 'none';
})



menuBtn.addEventListener('scroll', function() {
    navList.style.display = 'none';
})

window.onclick = function(e){
    if (e.target === navList) {
       navList.style.display = 'none';
    }
}
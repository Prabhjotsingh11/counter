// console.log('hi');
let count = document.getElementById('count');

let incBtn = document.getElementById('Increment');
incBtn.addEventListener('click', function (e) {
    count.textContent++;
})
let dcrBtn = document.getElementById('Decrement');
dcrBtn.addEventListener('click', function (e) {
    count.textContent--;
})
let rstBtn = document.getElementById('Reset');
rstBtn.addEventListener('click', function (e) {
    count.textContent = 0;
})


window.addEventListener('beforeunload',function(e){
    localStorage.setItem('data',count.textContent);
})
window.addEventListener('DOMContentLoaded',function(){
    var retrieved=localStorage.getItem('data');
    if(retrieved){
        count.textContent=retrieved;
    }
})
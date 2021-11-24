var one = document.querySelector('.item1').innerText;
var two =  document.querySelector('.item2').innerText;

document.querySelector('.item1').addEventListener('click', function(){
    document.querySelector('.displayNumber').innerText = one;
})
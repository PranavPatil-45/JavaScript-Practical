//create a counter app :==,--,2x,/2;
const h1 = document.getElementById('title');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

let counter = 0;

btn1.addEventListener('click', () => {
  counter++;
  h1.innerHTML = counter;
});

btn2.addEventListener('click', () => {
  counter--;
  h1.innerHTML = counter;
});

btn3.addEventListener('click', () => {
  counter*=2;
  h1.innerHTML = counter;
});

btn4.addEventListener('click', () => {
  counter/=2;
  h1.innerHTML = counter;
});
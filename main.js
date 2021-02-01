// 1
let boite = document.querySelector('#content');
console.log(boite);

// 1 & 2
boite.addEventListener('click', (e) =>{
    console.log(e.target);
})
// 3
boite.addEventListener('click', (e) => {
  let cible = e.target;
  cible.style = 'border: solid 2px red'
});

// event key
let input = document.querySelector('input');

input.addEventListener('keypress', (e) => {
  console.log(e.key);
})
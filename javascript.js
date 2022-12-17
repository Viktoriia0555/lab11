window.addEventListener('load', () => {
 // function addNewLayer () { ... } 
 const addNewLayer = (color) => {
  const div = document.createElement('div');
  div.classList.add('part');
  div.style.backgroundColor = color;

  div.addEventListener('click', () => {
   div.remove();
  });

  const container = document.getElementById('container');
  container.appendChild(div);
 };

 addNewLayer('yellow');
 addNewLayer('#12FA45');

 const items = document.getElementsByClassName('item');
 // for (let i = 0; i < items.length, i += 1) { ... }
 for (const item of items) {
  item.addEventListener('click', () => {
   const color = item.style.backgroundColor;
   addNewLayer(color);
  });
 }

 const btn = document.getElementById('color-add');
 btn.addEventListener('click', () => {
  const div = document.createElement('div');
  div.classList.add('item');

  const input = document.getElementById('color-value');
  const color = input.value;
  div.style.backgroundColor = color;

  div.addEventListener('click', () => {
   const color = input.value;
   addNewLayer(color);
  });

  const nav = document.querySelector('nav');
  nav.appendChild(div);
 });
});
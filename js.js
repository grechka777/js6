const input = document.querySelector('.input');
const input12 = document.querySelector('.input2');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

btn.addEventListener('click', function (event) {
    let li = document.createElement('li');
    let color = input12.value;

    li.innerHTML = input.value;
    list.appendChild(li);

    if (color > 10) li.className = "red";
    if (color < 10) li.className = "green";
    if (color == 10) li.className = "blue";





});
//Обратиться к элементу
let element1 = document.getElementById('element1'); //элемент с id #element1
let element2 = document.querySelector('.element2'); //первый элемент с классом .element2

let element3 = element2.querySelector('.element3'); //первый элемент с классом .element3 внутри элемента с классом .element2

let array1 = document.getElementsByClassName('element4'); //динамический массив элементов с классом .element4
let array2 = document.querySelectorAll('.element5'); //статический массив элементов с классом .element5

//циклы, перебор элементов массива
for (let i = 0; i < 5; i++) { //цикл повторится 5 раз
    console.log('Повтор цикла №: ' + i + 1);
}

array.forEach((i) => { //i - элемент массива
    console.log('Элемент:' + i);
})

array.forEach((i,k) => { //i - элемент массива, k - индекс элемента
    console.log('Элемент' + k + ':' + i);
})

for (let i = 0, length = array.length; i < length; i++) { //array1[i] - элемент массива, i - индекс элемента
    console.log('Элемент:' + i + ':' + array[i]);
}

for (let i of array) { //i - элемент массива
    console.log('Элемент:' + i);
}

Array.from(array).forEach((i) => { //i - элемент массива
    console.log('Элемент:' + i);
});

Array.from(array).forEach((i,k) => { //i - элемент массива, k - индекс элемента
    console.log('Элемент' + k + ':' + i);
});

Array.from([...array1, ...array2]).forEach((i) => { //массив из элементов 2-х и более массивов
    console.log('Элемент:' + i);
});

//условие
if (element.classList.contains("active")) {
    console.log('Элемент содержит класс active');
} else {
    console.log('Элемент не содержит класс active');
}

if (element.textContent === "green") {
    console.log("Зеленый");  
} else if (element.textContent === "yellow") {
    console.log("Желтый");
} else if (element.textContent === "red") {
    console.log("Красный");
} else {
    console.log("Цвет не выбран");
}


if (element >= 0 && element <= 10) {
     console.log('Число в диапазоне от 0 до 10');
} else {
     console.log('Число не входит в промежуток от 0 до 10');
}
//адаптивновсть через js
if (window.innerWidth <= 576) {
    console.log('Маленький экран');
} else if (window.innerWidth <= 992) {
    console.log('Средний экран');
} else {
    console.log('Большой экран');
}
//действие при нажатии
element.addEventListener('click', () => {
    console.log('Вы нажали на элемент');
});

element.addEventListener('click', function() {
    console.log('Вы нажали на эелемент');
});

<button onclick="myFunction()">Нажми меня</button>
function myFunction() {
    console.log('Кнопка была нажата');
}

//вызов функции при загрузке страницы
window.addEventListener('load', function() {
    console.log('Страница загрузилась');
});

//вызов функции при изменении размера окна
window.addEventListener('resize', function() {
    console.log('Размер экрана изменен');
});

//задержка выполнения кода
setTimeout(function() {
    alert('Этот код будет выполнен через 1 секунду');
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        console.log('Код будет выполнен через 1 секунду после загрузки страницы');
    }, 1000);
});

window.onload = function(){
	setTimeout(function() {
        console.log('Код будет выполнен через 1 секунду после загрузки страницы');
    }, 1000);
};

//действия с классами и id
element.classList.add('active');
element.classList.remove('active');
element.classList.toggle('active');
element.id = 'element';

//поменять содержимое элемента
element.textContent = 'New text';
element.innerHTML = 'New text';

//поменять стили элемента
element.style.display = 'block';
element.style.backgroundColor = 'green';
element.style.fontSize = '16px';
element.style.setProperty('color', 'blue');

//создать элемент
const element = document.createElement('div');
element.classList.add('text');
element.textContent = 'Hello, World!';
document.body.appendChild(element);

//переключатель
let color = "green";
switch (color) {
    case "green": {
        console.log("Зеленый");
    } break;
    case "yellow": {
        console.log("Желтый");
    } break;
    case "red": {
        console.log("Красный"); 
    } break;
    default: console.log("Цвет не выбран");
}

//подключить дополнительный файл стилей
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://site.ru/wp-content/themes/astra-child/css/style.css';
document.head.appendChild(link);

//скролл вверх страницы
element.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // плавная прокрутка
    });
};


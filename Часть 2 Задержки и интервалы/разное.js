// данный код вызывает sayHi() спустя одну секунду:
function sayHi() {
    alert('Привет');
  }
  
  setTimeout(sayHi, 1000);
// или
function sayHi(phrase, who) {
    alert( phrase + ', ' + who );
  }
  
setTimeout(sayHi, 1000, "Привет", "Джон"); // Привет, Джон

// отмена ------------------------------------------------------------
let timerId = setTimeout(...);
clearTimeout(timerId);
//  ------------------------------------------------------------------
let timerId = setTimeout(() => alert("ничего не происходит"), 1000);
alert(timerId); // идентификатор таймера

clearTimeout(timerId);
alert(timerId); // тот же идентификатор (не принимает значение null после отмены)

// -------------- интервал --------------------------------

// повторить с интервалом 2 секунды
let timerId = setInterval(() => alert('tick'), 2000);

// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

// ------------------ вложенный setTimeout -----------------------------
/** вместо:
let timerId = setInterval(() => alert('tick'), 2000);
*/

let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000); // (*)
  }, 2000);

// Например, необходимо написать сервис, который отправляет запрос 
// для получения данных на сервер каждые 5 секунд, но если сервер перегружен, 
// то необходимо увеличить интервал запросов до 10, 20, 40 секунд… Вот псевдокод:

let delay = 5000;

let timerId = setTimeout(function request() {
  ...отправить запрос...

  if (ошибка запроса из-за перегрузки сервера) {
    // увеличить интервал для следующего запроса
    delay *= 2;
  }

  timerId = setTimeout(request, delay);

}, delay);

// ----------задержка выполнения: ---------------
let i = 1;
setTimeout(function run() {
  func(i);
  setTimeout(run, 100);
}, 100);

// нулевая задержка - код выводит «Привет» и затем сразу «Мир»:
setTimeout(() => alert("Мир"));

alert("Привет");


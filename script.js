// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
const getMin = (arr) => Math.min(...arr);
console.log(getMin(arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter(initialValue) {
  let value = initialValue;

  return {
    increment(num) {
      value += num;
    },
    decrement(num) {
      value -= num;
    },
    getValue() {
      return value;
    },
  };
}

const calcul = createCounter(5);
console.log(calcul.getValue());
calcul.increment(3);
console.log(calcul.getValue());
calcul.decrement(5);
console.log(calcul.getValue());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(rootElement, className) {
  if (rootElement.classList.contains(className)) {
    return rootElement;
  }
  for (const child of rootElement.children) {
    const result = findElementByClass(child, className);
    if (result) return result;
  }
  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  const targetElement = findElementByClass(rootElement, "my-class");
  console.log(targetElement);
});

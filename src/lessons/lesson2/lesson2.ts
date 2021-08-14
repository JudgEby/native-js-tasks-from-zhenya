console.log('lesson 2')

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

const sum = (n1: number) => {
  return (n2: number) => {
    return n1 + n2
  }
}
// console.log(sum(3)(6))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

const makeCounter = () => {
  let start = 0
  return () => {
    return ++start
  }
}

// const counter = makeCounter()
// console.log(counter())
// console.log(counter())
// const counter2 = makeCounter()
// console.log(counter2())
// console.log(counter())

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

const makeCounter2 = (startCounter: number) => {
  return {
    increase: () => ++startCounter,
    decrease: () => --startCounter,
    reset: () => (startCounter = 0),
    set: (setStartCounter: number) => (startCounter = setStartCounter),
  }
}

const counter3 = makeCounter2(1)
// console.log(counter3.increase())
// console.log(counter3.increase())
// console.log(counter3.decrease())
// console.log(counter3.reset())
// console.log(counter3.increase())
// console.log(counter3.set(3))
// console.log(counter3.decrease())

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

const superSum = (numberOfTerms: number) => {
  if (numberOfTerms <= 0) return 0
  if (numberOfTerms === 1) return (num1: number) => num1

  let acc: number[] = []

  const helper = (...args: number[]) => {
    acc = [...acc, ...args]
    if (acc.length >= numberOfTerms) {
      acc.length = numberOfTerms
      return acc.reduce((acc, num, i) => acc + num)
    } else {
      return helper
    }
  }

  return helper
}

// console.log(superSum(0))
//
// console.log(superSum(3)(2)(5)(3))
//
// console.log(superSum(3)(2)(5, 3))
//
// console.log(superSum(3)(2, 5, 3))
//
// console.log(superSum(3)(2, 5)(3))
//
// console.log(superSum(3)(2, 5)(3, 9))
//
// console.log(superSum(5)(2, 5)(3, 9))

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

const sumTo1 = (n: number): number => {
  let res = 0
  for (let i = 0; i <= n; i++) {
    res += i
  }
  return res
}

// console.log(sumTo1(100))

const sumTo2 = (n: number): number => {
  if (n <= 1) return n
  return n + sumTo2(n - 1)
}
// console.log(sumTo2(100))

const sumTo3 = (n: number): number => {
  return (0.5 + n / 2) * n
}

// console.log(sumTo3(100))

const factorial = (n: number): number => {
  if (n <= 1) return n
  return n * factorial(n - 1)
}
// console.log(factorial(5))

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

const goFlat = (arr: any): any => {
  let result: any = []
  if (typeof arr === 'object' && arr.length) {
    arr.map((elem: any) =>
      typeof elem === 'object' && elem.length
        ? (result = [...result, ...goFlat(elem)])
        : (result = [...result, elem])
    )
  }
  return result
}

// console.log(goFlat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]))

// just a plug
export default () => {}

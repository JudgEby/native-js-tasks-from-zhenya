import { log } from 'util'

console.log('Lesson 6')

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

interface StudentInt {
  name: string
  surname: string
  groupNumber: number
  progress: number[]
  averageMark: number
}

class Student implements StudentInt {
  averageMark: number

  constructor(
    public name: string,
    public surname: string,
    public groupNumber: number,
    public progress: number[]
  ) {
    this.name = name
    this.surname = surname
    this.groupNumber = groupNumber
    this.progress = progress
    this.averageMark =
      this.progress.reduce((sum, mark) => sum + mark) / this.progress.length
  }

  private static sortStudent(s1: StudentInt, s2: StudentInt) {
    return s1.averageMark < s2.averageMark ? 1 : -1
  }

  static sort(arr: StudentInt[]) {
    const copyArr = [...arr]
    return copyArr.sort(this.sortStudent)
  }

  private static isAllMarksEqual(marks: number[], num: number) {
    return marks.every((mark) => mark === num)
  }

  private static filterStudents(arr: StudentInt[]) {
    return arr.filter(
      (s) =>
        this.isAllMarksEqual(s.progress, 4) ||
        this.isAllMarksEqual(s.progress, 5)
    )
  }

  static printGoodStudents(arr: StudentInt[]) {
    return this.filterStudents(arr).forEach((student) =>
      console.log(
        `${student.name} ${student.surname} из группы ${student.groupNumber} имеет все оценки ${student.averageMark}`
      )
    )
  }
}

const Yan = new Student('Yan', 'Dobro', 666, [5, 5, 5, 5, 5])
const Dimon = new Student('Dimon', 'Sergeev', 45, [3, 4, 2, 3, 1])
const Nadya = new Student('Nadya', 'Dobrovolskaya', 33, [4, 4, 4, 4, 4])
const Miron = new Student('Miron', 'Dobrovolskiy', 27, [5, 4, 5, 5, 5])
const Ilya = new Student('Ilya', 'Kozirev', 8, [5, 3, 5, 3, 5])
const Liza = new Student('Liza', 'Kozireva', 19, [4, 4, 4, 4, 4])
const students = [Yan, Dimon, Nadya, Miron, Ilya, Liza]

Student.printGoodStudents(students)
console.log(Student.sort(students))

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

interface TimeInt {
  hours: number
  minutes: number
  seconds: number
  checkCorrect: Function
}

class Time implements TimeInt {
  checkCorrect: Function
  constructor(
    public hours: number,
    public minutes: number,
    public seconds: number
  ) {
    this.checkCorrect = (num: number) => {
      if (num >= 0) {
        return num
      }
      throw new Error(
        'Передано неверное значение - все параметры должны быть больше или равны нулю'
      )
    }
    this.hours = this.checkCorrect(hours)
    this.minutes = this.checkCorrect(minutes)
    this.seconds = this.checkCorrect(seconds)
  }
  private increase(numAsString: number, number: number) {
    return numAsString + number
  }
  private normalizeToString(num: number) {
    return num >= 10 ? `${num}` : `0${num}`
  }
  changeHour(hour: number) {
    this.hours = this.increase(this.hours, hour)
  }
  changeMinutes(minutes: number) {
    this.minutes = this.increase(this.minutes, minutes)
  }
  changeSeconds(seconds: number) {
    this.seconds = this.increase(this.seconds, seconds)
  }
  getTime() {
    return `${this.normalizeToString(this.hours)}:${this.normalizeToString(
      this.minutes
    )}:${this.normalizeToString(this.seconds)}`
  }
}

const a = new Time(10, 5, 4)
a.changeHour(10)
console.log(a.getTime())

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {}

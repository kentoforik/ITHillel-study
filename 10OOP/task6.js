// Імплементуйте клас Student з такими публічними властивостями як name, lastName та averageScore. Імплементуйте статичний метод getStudentsAverageScore для обчислення середнього балу всіх студентів. Цей метод має приймати масив студентів. Розрахунок середнього балу всіх студентів - сума балів всіх студентів поділена на кількість студентів. Середній бал має бути округленим до 2 знаків після коми. Якщо передано пустий масив студентів то має бути повернений 0.

class Student {

  constructor(name, lastName, averageScore) {
    this.name = name;
    this.lastName = lastName;
    this.averageScore = averageScore;
  }

  static getStudentsAverageScore(studentsList) {
    if (studentsList.length === 0) return 0;

    const studentsAvgArr = studentsList.map(el => el.averageScore)

    const sum = studentsAvgArr.reduce((accumulator, currentValue) => accumulator + currentValue)
    return parseFloat((sum / studentsAvgArr.length).toFixed(2))
  }
}

const studentsArr = [
  {
    name: 'John', lastName: 'Doe', averageScore: 10
  },
  {
    name: 'Jane', lastName: 'Doe', averageScore: 20
  }
]

const studentsArr2 = [
  {
    name: 'John',
    lastName: 'Doe',
    averageScore: 12
  },
  {
    name: 'Jane',
    lastName: 'Doe',
    averageScore: 21
  }
]

console.log(Student.getStudentsAverageScore(studentsArr))
console.log(Student.getStudentsAverageScore(studentsArr2))
// task 1

type Student = {
    id: number
    name: string
    group: number
}

const array: Student[] = [
    {id: 1, name: "Vasya", group: 10},
    {id: 2, name: "Ivan", group: 11},
    {id: 3, name: "Misha", group: 12},
    {id: 4, name: "Petya", group: 10},
    {id: 5, name: "Kira", group: 11}
]

// task 2

type CarsType = {
    manufacturer: string
    model: string
}

let car: CarsType = {
    manufacturer: "manufacturer",
    model: 'model'
}

// task 3

const car1: CarsType = {
    manufacturer: "manufacturer1",
    model: "model1"
}

const car2: CarsType = {
    manufacturer: "manufacturer2",
    model: "model2"
}

const arrayCars: Array<CarsType> = [
    car1, car2
]

// task 4

type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
type DoneType = true | false

type MarkType = {
    subject: string,
    mark: MarkFilterType, // может принимать значения от 1 до 10
    done: DoneType,
}

///////////////////////////////////////////////////////////////////

type GroupFilterType = MarkFilterType | 11 | 12

type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, // может принимать значения от 1 до 12
    marks: Array<MarkType>
}
///////////////////////////////////////////////////////////////////

function studentsFilter(group: number): StudentType[] 
{
    let arrayStudent: StudentType[] = []
    this.students.forEach(student => {
        if (student.group == group)
        {
            arrayStudent.push(student)
        }
    });
    return arrayStudent
}

function marksFilter(mark: number): StudentType[] 
{
    let buffer: Array<StudentType> = new Array<StudentType>;
    let flag:boolean = false
    for (const student of this.students) 
    {
        for(const mark1 of student.marks)
        {
            if(mark1.mark == mark && flag == false)
            {
            buffer.push(student);
            flag = true;
            }
        }
        flag = false
    }
    
    return buffer;
}

function deleteStudent(id): void
{
    this.students = this.students.filter(s => s.id != id);
}

type GroupType = {
    students: StudentType[], // массив студентов типа StudentType
    mark: MarkFilterType,
    group: GroupFilterType,
    studentsFilter: (group: number) => Array<StudentType>, // фильтр по группе
    marksFilter: (mark: number) => Array<StudentType>, // фильтр по  оценке
    deleteStudent: (id: number) => void, // удалить студента по id из  исходного массива
}

// examples

let a: MarkType = {
    subject: "Math",
    mark: 10,
    done: true
}
let b: MarkType = {
    subject: "Biology",
    mark: 10,
    done: true
}

let first: StudentType = {
    id: 1,
    name: "nikita",
    group: 12,
    marks: [a, b]
}
let second: StudentType = {
    id: 2,
    name: "Maxim",
    group: 12,
    marks: [
        {subject: "Math", mark: 8, done: true},
        {subject: "English", mark: 3, done: false}
    ]
}

let firstGroup: GroupType = {
    students: [first, second],
    studentsFilter: studentsFilter,
    marksFilter: marksFilter,
    deleteStudent: deleteStudent,
    mark: 5,
    group: 12
}

console.log(firstGroup.studentsFilter(12))
console.log(firstGroup.marksFilter(10))
firstGroup.deleteStudent(1)
console.log("-------------");
console.log(firstGroup.students)
// task 1
var array = [
    { id: 1, name: "Vasya", group: 10 },
    { id: 2, name: "Ivan", group: 11 },
    { id: 3, name: "Misha", group: 12 },
    { id: 4, name: "Petya", group: 10 },
    { id: 5, name: "Kira", group: 11 }
];
var car = {
    manufacturer: "manufacturer",
    model: 'model'
};
// task 3
var car1 = {
    manufacturer: "manufacturer1",
    model: "model1"
};
var car2 = {
    manufacturer: "manufacturer2",
    model: "model2"
};
var arrayCars = [
    car1, car2
];
///////////////////////////////////////////////////////////////////
function studentsFilter(group) {
    var arrayStudent = [];
    this.students.forEach(function (student) {
        if (student.group == group) {
            arrayStudent.push(student);
        }
    });
    return arrayStudent;
}
function marksFilter(mark) {
    var buffer = new Array;
    var flag = false;
    for (var _i = 0, _a = this.students; _i < _a.length; _i++) {
        var student = _a[_i];
        for (var _b = 0, _c = student.marks; _b < _c.length; _b++) {
            var mark1 = _c[_b];
            if (mark1.mark == mark && flag == false) {
                buffer.push(student);
                flag = true;
            }
        }
        flag = false;
    }
    return buffer;
}
function deleteStudent(id) {
    this.students = this.students.filter(function (s) { return s.id != id; });
}
// examples
var a = {
    subject: "Math",
    mark: 10,
    done: true
};
var b = {
    subject: "Biology",
    mark: 10,
    done: true
};
var first = {
    id: 1,
    name: "nikita",
    group: 12,
    marks: [a, b]
};
var second = {
    id: 2,
    name: "Maxim",
    group: 12,
    marks: [
        { subject: "Math", mark: 8, done: true },
        { subject: "English", mark: 3, done: false }
    ]
};
var firstGroup = {
    students: [first, second],
    studentsFilter: studentsFilter,
    marksFilter: marksFilter,
    deleteStudent: deleteStudent,
    mark: 5,
    group: 12
};
console.log(firstGroup.studentsFilter(12));
console.log(firstGroup.marksFilter(10));
firstGroup.deleteStudent(1);
console.log("-------------");
console.log(firstGroup.students);

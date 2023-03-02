console.log("первое задание");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log("второе задание");
console.log(calcDevidedBy3And5(15));
console.log("третье задание");
console.log(rightArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log("четвёртое задание");
console.log(mediana([2, 1], [3, 4]));
console.log("пятое задание");
console.log(sudoku([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 9, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
]));
function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";
    for (var i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i].toString());
    }
    return format;
}
function calcDevidedBy3And5(maxNumber) {
    var sum = 0;
    if (maxNumber < 0)
        return sum;
    for (var i = 0; i <= maxNumber; ++i)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;
    return sum;
}
function rightArray(array, k) {
    for (var i = 0; i < k; i++) {
        var n = array[array.length - 1];
        for (var j = array.length - 1; j >= 0; j--) {
            array[j] = array[j - 1];
        }
        array[0] = n;
    }
    return array;
}
function mediana(array1, array2) {
    var array = [];
    var mediane;
    for (var i = 0; i < array1.length; i++) {
        array[i] = array1[i];
    }
    for (var j = array.length; j < (array1.length + array2.length); j++) {
        array[j] = array2[j - array1.length];
    }
    array.sort();
    if (array.length % 2 == 0) {
        mediane = (array[Math.round((array.length - 1) / 2)] - 1 + array[Math.round((array.length - 1) / 2)]) / 2;
    }
    else {
        mediane = array[(array.length - 1) / 2];
    }
    return mediane;
}
function sudoku(matrix) {
    var mySet = new Set();
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (mySet.has(matrix[i][j])) {
                return "доска неправильная";
            }
            if (matrix[i][j] != 0)
                mySet.add(matrix[i][j]);
        }
        mySet.clear();
    }
    for (var j = 0; j < 9; j++) {
        for (var i = 0; i < 9; i++) {
            if (mySet.has(matrix[i][j])) {
                return "доска неправильная";
            }
            if (matrix[i][j] != 0)
                mySet.add(matrix[i][j]);
        }
        mySet.clear();
    }
    for (var i = 0; i < 3; i++)
        for (var j = 0; j < 3; j++) {
            if (mySet.has(matrix[i][j])) {
                return "доска неправильная";
            }
            if (matrix[i][j] != 0)
                mySet.add(matrix[i][j]);
        }
    mySet.clear();
    for (var i = 3; i < 6; i++)
        for (var j = 0; j < 3; j++) {
            if (mySet.has(matrix[i][j])) {
                return "доска неправильная";
            }
            if (matrix[i][j] != 0)
                mySet.add(matrix[i][j]);
        }
    mySet.clear();
    for (var i = 6; i < 9; i++)
        for (var j = 0; j < 3; j++) {
            if (mySet.has(matrix[i][j])) {
                return "доска неправильная";
            }
            if (matrix[i][j] != 0)
                mySet.add(matrix[i][j]);
        }
    mySet.clear();
    for (var i = 0; i < 3; i++)
        for (var j = 3; j < 6; j++) {
            if (mySet.has(matrix[i][j])) {
                return "доска неправильная";
            }
            if (matrix[i][j] != 0)
                mySet.add(matrix[i][j]);
        }
    mySet.clear();
    for (var i = 3; i < 6; i++)
        for (var j = 3; j < 6; j++) {
            if (mySet.has(matrix[i][j])) {
                return "доска неправильная";
            }
            if (matrix[i][j] != 0)
                mySet.add(matrix[i][j]);
        }
    mySet.clear();
    for (var i = 6; i < 9; i++)
        for (var j = 3; j < 6; j++) {
            if (mySet.has(matrix[i][j])) {
                return "доска неправильная";
            }
            if (matrix[i][j] != 0)
                mySet.add(matrix[i][j]);
        }
    mySet.clear();
    for (var i = 0; i < 3; i++)
        for (var j = 6; j < 9; j++) {
            if (mySet.has(matrix[i][j])) {
                return "доска неправильная";
            }
            if (matrix[i][j] != 0)
                mySet.add(matrix[i][j]);
        }
    mySet.clear();
    for (var i = 3; i < 6; i++)
        for (var j = 6; j < 9; j++) {
            if (mySet.has(matrix[i][j])) {
                return "доска неправильная";
            }
            if (matrix[i][j] != 0)
                mySet.add(matrix[i][j]);
        }
    mySet.clear();
    for (var i = 6; i < 9; i++)
        for (var j = 6; j < 9; j++) {
            if (mySet.has(matrix[i][j])) {
                return "доска неправильная";
            }
            if (matrix[i][j] != 0)
                mySet.add(matrix[i][j]);
        }
    mySet.clear();
    return "доска правильная";
}

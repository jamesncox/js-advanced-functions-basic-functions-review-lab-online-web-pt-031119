// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function (flair = '*') {
    return function (adjParameter = 'special') {
        return `You are ${flair}${adjParameter}${flair}!`
    }
}

const Calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b
    },
    multiply: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        return a / b;
    }
}

let actionApplyer = function (start, array) {
    let a = start

    for (let i = 0; i < array.length; i++) {
        a = array[i](a)
    }

    return a
}
const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    // console.log(data)
    let arr1 = data.split('\n')


    // part 1
    let score = 0
    let arr2 = ['A', 'B', 'C']
    let arr3 = ['X', 'Y', 'Z']
    arr1.forEach(x => {
        if (arr2.indexOf(x[0]) === arr3.indexOf(x[2])) {
            score += 3
        } else if (((arr2.indexOf(x[0]) + 1) % arr3.length) === arr3.indexOf(x[2])) {
            score += 6
        } 
        score += arr3.indexOf(x[2]) + 1
    })
    console.log(score)

    // part 2
    let score2 = 0
    arr1.forEach(x => {
        score2 += arr3.indexOf(x[2]) * 3
        if (x[2] == 'Y') {
            score2 += arr2.indexOf(x[0]) + 1
        } else if (x[2] === 'X') {
            score2 += ((arr2.indexOf(x[0]) + 2) % arr2.length) + 1
        } else if (x[2] === 'Z') {
            score2 += ((arr2.indexOf(x[0]) + 1) % arr2.length) + 1
        }
    })
    // console.log(arr1)
    console.log(score2)
});

// rock, paper, scissors
// A   , B    , C
// X   , Y    , Z

const fs = require('fs');

fs.readFile('./day1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let arr1 = data.split('\n').map(Number)
    let arr2 = []
    let acc = 0
    arr1.forEach(x => {
        if (x === 0) {
            arr2.push(acc)
            acc = 0
        } else {
            acc += x
        }
    })
    let answer1 = Math.max(...arr2)
    console.log(answer1)
    
    // part 2
    let sorted = arr2.sort((a,b) => b - a)
    let answer2 = sorted[0] + sorted[1] + sorted[2]
    console.log(answer2)
});
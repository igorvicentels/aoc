const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let arr1 = data.split('\n').map(x => x.split(',').map(x => x.split('-')))
    // console.log(arr1)
    let count = 0
    arr1.forEach(arr => {
        let num1 = Number(arr[0][0])
        let num2 = Number(arr[1][0])
        let num3 = Number(arr[0][1])
        let num4 = Number(arr[1][1])
        if ((num1 <= num2 && num3 >= num4) ||
            (num1 >= num2 && num3 <= num4)) {
                count++
        }
    })
    console.log(count)

    // part 2
    let count2 = 0
    arr1.forEach(arr => {
        let num1 = Number(arr[0][0])
        let num2 = Number(arr[1][0])
        let num3 = Number(arr[0][1])
        let num4 = Number(arr[1][1])
        if ((num1 <= num2 && num3 >= num2) ||
            (num1 <= num4 && num3 >= num2)) {
                count2++
        }
    })
    console.log(count2)
});
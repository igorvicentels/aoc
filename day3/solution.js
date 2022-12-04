const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let arr1 = data.split('\n')
    // console.log(arr1)
    let sum = 0
    arr1.forEach(x => {
        let p1 = x.slice(0, x.length / 2).split('')
        let p2 = x.slice(x.length / 2).split('')
        let intersection = [... new Set(p1.filter(x => p2.includes(x)))]
        let char = intersection[0]
        let priority = calcPriority(char)
        sum += priority
        // console.log(char, priority)
    })
    console.log(sum)

    // part 2
    let arr2 = []
    let sum2 = 0
    for (let i = 0; i < arr1.length; i += 3) {
        arr2.push(arr1.slice(i, i+3))
    }
    // console.log(arr2)
    arr2.forEach(arr => {
        let badge = [... new Set(arr[0].split('').filter(x => arr[1].includes(x) && arr[2].includes(x)))]
        sum2 += calcPriority(badge[0])
    })
    console.log(sum2)
});

function calcPriority(char) {
    if (char.toUpperCase() == char) {
        return char.charCodeAt(0) - 38
    } else if (char.toLowerCase() == char) {
        return char.charCodeAt(0) - 96
    }
}
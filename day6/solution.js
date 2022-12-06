const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let arr = data.split('')
    
    // part 1
    let result1
    for (let i = 3; i < arr.length; i++) {
        if (i > 2) {
            let set = new Set ([...arr[i], arr[i-1], arr[i-2], arr[i-3]])
            if (set.size == 4) {
                result1 = i + 1
                break;
            } 
        } 
    }
    console.log(result1)

    // part 2
    let result2
    for (let i = 13; i < arr.length; i++) {
        if (i > 2) {
            let set = new Set ([...arr.slice(i-13, i + 1)])
            if (set.size == 14) {
                result2 = i + 1
                break;
            } 
        } 
    }
    console.log(result2)
});
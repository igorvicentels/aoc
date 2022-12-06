const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    let arr = data.split('')
    
    // part 1
    let result1 = checkSeqN(4, arr)
    console.log(result1)

    // part 2              
    let result2 = checkSeqN(14, arr)
    console.log(result2)
});

function checkSeqN (n, arr) {
    for (let i = n - 1; i < arr.length; i++) {
        let set = new Set ([...arr.slice(i - (n - 1), i + 1)])
        if (set.size == n) {
            return i + 1 
        } 
    }
}
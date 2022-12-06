const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let init_state = data.split('\n\n')[0].split('\n').slice(0,-1)
    let init_height = init_state.length 
    let init_width = Math.floor(init_state[0].length / 4 + 1)
    let moves = data.split('\n\n')[1].split('\n')

    stacks = []
    stacks2 = []
    for (let i = 0; i < init_width; i++) {
        stacks.push([])
        stacks2.push([])
    }

    for (let i = 0; i < init_height; i++) {
        for (let j = 0; j < init_width; j++) {
            let pos = j * 4 + 1
            let crate = init_state[i][pos]
            if (crate != " ") {
                stacks[j].push(crate)
                stacks2[j].push(crate)
            }
        }
    }
    stacks = stacks.map(x => x.reverse())
    stacks2 = stacks2.map(x => x.reverse())
    console.log(stacks)
    console.log(stacks2)
    // console.log(moves)
    moves.forEach(x => {
        move(readMove(x), stacks)
    })
    // console.log(stacks)
    
    let result = stacks.map(x => x.pop()).join('')
    console.log(result)

    // part 2
    moves.forEach(x => {
        move2(readMove(x), stacks2)
    })

    let result2 = stacks2.map(x => x.pop()).join('')
    console.log(result2)
});

function readMove (str) {
    let arr = str.split(' ')
    let qtd = arr[1]
    let from = arr[3]
    let to = arr[5]
    return [qtd, from, to]
}

function move(arr, stck) {
    let from = arr[1] - 1
    let to = arr[2] - 1
    for (let i = 0; i < arr[0]; i++) {
        let crate = stck[from].pop()
        stck[to].push(crate)
    }
}

function move2(arr, stck) {
    let qtd = arr[0]
    let from = arr[1] - 1
    let to = arr[2] - 1
    // console.log(qtd)
    // console.log(from)
    // console.log(to)
    let crate = []
    for (let i = 0; i < qtd; i++) {
        crate.push(stck[from].pop())
    }
    crate = crate.reverse()
    stck[to] = stck[to].concat(crate)
}

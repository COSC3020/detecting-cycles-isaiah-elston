const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

const graph1 = [
    [1],
    [2],
    [3],
    [4],
    [2]
]
assert(JSON.stringify(hasCycle(graph1)) === JSON.stringify(true))

const graph2 = [
    [1, 4, 5],
    [2],
    [3],
    [],
    [],
    [3]
]
assert(JSON.stringify(hasCycle(graph2)) == JSON.stringify(false))

const graph3 = [
    [1], 
    [2],
    [0]
]
assert(JSON.stringify(hasCycle(graph3)) == JSON.stringify(true))

const graph4 = [
    [1],
    [2],
    [3],
    [4],
    [2]
]
assert(JSON.stringify(hasCycle(graph4)) == JSON.stringify(true))

const graph5 = [
    [1],
    [2,3],
    [],
    []
]
assert(JSON.stringify(hasCycle(graph5)) == JSON.stringify(false))

const graph6 = [
    [1, 2, 3],
    [],
    [],
    []
]
assert(JSON.stringify(hasCycle(graph6)) == JSON.stringify(false))

const graph7 = []
assert(JSON.stringify(hasCycle(graph7)) == JSON.stringify(false))
'use strict';

let leader = {
    name: 'Vaha Abuzarovich',
    age: 26
};

let leaderJson = JSON.stringify(leader);
leader = JSON.parse(leaderJson);

console.log(leaderJson);
console.log(leader);
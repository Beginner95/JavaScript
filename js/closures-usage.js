'use strict';

let users = [
    {
        name: 'Vasy',
        surname: 'Vasiliev',
        age: 20
    },
    
    {
        name: 'Pety',
        surname: 'Petrov',
        age: 33
    },
    
    {
        name: 'Ivan',
        surname: 'Ivanov',
        age: 27
    },
    
    {
        name: 'Philip',
        surname: 'Samsungov',
        age: 18
    }
];

let byField = function(field) {
    return function(a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
};

users.sort(byField('age'));
users.forEach(function(user) {
    console.log(user.name);
});
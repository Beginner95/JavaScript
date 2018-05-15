'use strict';

let user = {};
user.name = 'Vasy';
user.surname = 'Petrov';
user.name = 'Sergay';
delete user.name;

alert(user.name);

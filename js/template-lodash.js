'use strict';

var users = [{
    name: "Admin",
    age: 10
},
{
    name: "Azamat",
    age: 15
},
{
    name: "Arbi",
    age: 20
},
{
    name: "Vaha",
    age: 25
},
{
    name: "Agent",
    age: 30
}];

var tmpl = document.getElementById('grid-template').innerHTML.trim();
tmpl = _.template(tmpl);


document.getElementById('grid-holder').innerHTML = tmpl({
list: users
});
'use strict';

let User = function(fullName) {
    this.fullName = fullName;
    
    Object.defineProperties(this, {
        firstName: {
            get: function() {
                return this.fullName.split(' ')[0];
            },
            
            set: function(newFistName) {
                this.fullName = newFistName + ' ' + this.lastName;
            }
        },
        
        lastName: {
            get: function() {
                return this.fullName.split(' ')[1];
            },
            
            set: function(newLastName) {
                this.fullName = this.firstName + ' ' + newLastName;
            }
        }
    });
};

let ivan = new User('Ivanov Ivan');

alert( ivan.firstName );
alert( ivan.lastName );
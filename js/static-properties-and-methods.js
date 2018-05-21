'use strict';

let Article = function() {
    this.created = new Date();
    
    Article.count++;
    Article.last = this.created;
};

Article.count = 0;

Article.showStats = function() {
    alert( 'Всего: ' + this.count + ', Последняя: ' + this.last );
};

new Article();
new Article();

Article.showStats();
'use strict';

function Menu(options) {
    let elem;

    function getElem() {
        if (!elem) {
            render();
        }
        return elem;
    }

    function render() {
        let html = options.template({
            title: options.title
        });

        elem = document.createElement('div');
        elem.innerHTML = html;
        elem = elem.firstElementChild;

        elem.onmousedown = function() {
            return false;
        }

        elem.onclick = function(event) {
            if (event.target.closest('.title')) {
                toggle();
            }

            if (event.target.closest('a')) {
                event.preventDefault();
                select(event.target.closest('a'));
            }
        }
    }

    function renderItems() {
        if (elem.querySelector('ul')) {
            return;
        }

        let listHtml = options.listTemplate({
            items: options.items
        });
        elem.insertAdjacentHTML("beforeEnd", listHtml);
    }

    function select(link) {
        alert(link.getAttribute('href').slice(1));
    }

    function open() {
        renderItems();
        elem.classList.add('open');
    };

    function close() {
        elem.classList.remove('open');
    };

    function toggle() {
        if (elem.classList.contains('open')) close();
        else open();
    };

    this.getElem = getElem;
    this.toggle = toggle;
    this.close = close;
    this.open = open;
}

let menu = new Menu({
    title: "Сладости",
    template: _.template(document.getElementById('menu-template').innerHTML.trim()),
    listTemplate: _.template(document.getElementById('menu-list-template').innerHTML.trim()),
    items: {
        cake: "Торт",
        donut: "Пончик",
        chokolate: "Шоколадка"
    }
});

document.body.appendChild(menu.getElem());
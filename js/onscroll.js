let avatarElem = document.getElementById('avatar');
let avatarSourceBootom = avatarElem.getBoundingClientRect().bottom + window.pageXOffset;
cl(avatarElem);
cl(avatarSourceBootom);
window.onscroll = function() {
    if (avatarElem.classList.contains('fixed') && window.pageYOffset < avatarSourceBootom) {
        avatarElem.classList.remove('fixed');
    } else if (window.pageYOffset > avatarSourceBootom) {
        avatarElem.classList.add('fixed');
    }
};

function cl(obj)
{
    console.log(obj);
}


var body = document.querySelector('body');
var button =
document.querySelector('button');
var green = true;
button.addEventListener('click', function ()
{
    if (green) {
        body.style.background = 'white';
    } else {
        body.style.background = 'gold';
    }
    green = !green;
});


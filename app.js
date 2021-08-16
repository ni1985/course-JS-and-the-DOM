//changing a heading backgtound with click of a mouse
/*document.addEventListener('click', function() {
    console.log('the mouse button was clicked');
    const mainHeading = document.querySelector('h1');

    mainHeading.style.backgroundColor = "red";
});*/

/* get info about the event
document.addEventListener('click', function(event) {
    console.log(event);
});
*/

//prevent from go by the link
const links = document.querySelectorAll('a');
firstLink = links[0];
console.log(firstLink.innerText);

firstLink.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Look, ma! We didn't navigate to a new page!");
});


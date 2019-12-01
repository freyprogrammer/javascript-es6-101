//to remove an element select the parent element and use removeChild
var thingToRemove = document.querySelectorAll(".remove-me")[0];
thingToRemove.parentNode.removeChild(thingToRemove);

// empty out all the elements inside but keep the main element
mydiv = document.getElementById('empty-me');
while (mydiv.firstChild) {
  mydiv.removeChild(mydiv.firstChild);
}
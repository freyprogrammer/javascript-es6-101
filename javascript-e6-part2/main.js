let name = 'Frey';

function makeUpper(word) {
    return word.toUpperCase();
};

//Using Backtick for templating and spaces, also includes variables and functions
let template = `<h1>${makeUpper('Hello')}, ${name}</h1>
                <p>This is a simple Javascript Template</p>
                <p>-JS</p>`;

document.getElementById('template').innerHTML = template;
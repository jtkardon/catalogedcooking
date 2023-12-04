class Recipe {
    constructor(name, img, rating, health, difficulty, time, course, ingredients, steps) {
        this.name = name;
        this.img = img;
        this.rating = rating;
        this.health = health;
        this.difficulty = difficulty;
        this.time = time;
        this.course = course;
        this.ingredients = ingredients;
        this.steps = steps;
    }
}

var recipe = new Recipe();
var ingredients = [];
var steps = [];
var ingrID = 0;
var stepID = 0;

function addIngr() {
    var ul = document.getElementById('ingr');
    var input = document.createElement('input');
    //input.setAttribute("placeholder", "Ingredient");
    input.setAttribute("class", "ingredients");
    input.setAttribute("name", "ingredient");
    input.setAttribute("id", ingrID);
    ul.append(input);

    let name = document.getElementById(ingrID);
    name.addEventListener('input', (event) => {
        ingredients[ingrID] = event.target.value
    })
    ingrID++;

}

function minusIngr() {
    var ul = document.getElementById('ingr');
    var inputs = document.getElementsByClassName('ingredients');
    if (inputs.length > 0) {
        ul.removeChild(inputs[inputs.length - 1])
    }
    ingrID--;
}

function addStep() {
    var ol = document.getElementById('step');
    var input = document.createElement('input');
    var li = document.createElement('li');
    //input.setAttribute("placeholder", "Step");
    input.setAttribute("class", "stepsI");
    input.setAttribute("name", "step");
    li.setAttribute("class", "stepsLI")
    input.setAttribute("id", stepID);
    li.append(input);
    ol.append(li);

    let name = document.getElementById(stepID);
    name.addEventListener('input', (event) => {
        steps[ingrID] = event.target.value
    })
    stepID++;

}

function minusStep() {
    var ul = document.getElementById('step');
    var inputs = document.getElementsByClassName('stepsLI');
    if (inputs.length > 0) {
        ul.removeChild(inputs[inputs.length - 1])
    }
    stepID--;
}

function test() {
    console.log(recipe)
}

function initBody() {

    addIngr();
    addStep();

    let name = document.getElementById('rname');
    name.addEventListener('input', (event) => {
        recipe.name = event.target.value
    })
    let rating = document.getElementById('rating');
    rating.addEventListener('input', (event) => {
        recipe.rating = event.target.value
    })
    let diff = document.getElementById('diff');
    diff.addEventListener('input', (event) => {
        recipe.difficulty = event.target.value
    })
    let time = document.getElementById('time');
    time.addEventListener('input', (event) => {
        recipe.time = event.target.value
    })
    let health = document.getElementById('health');
    health.addEventListener('input', (event) => {
        recipe.health = event.target.value
    })
}
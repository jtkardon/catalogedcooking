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
var baseName;
var index;
function addIngr() {
    var ul = document.getElementById('ingr');
    var input = document.createElement('input');
    //input.setAttribute("placeholder", "Ingredient");
    input.setAttribute("class", "ingredients");
    input.setAttribute("name", "ingredient");
    input.setAttribute("id", ingrID + "i");
    ul.append(input);

    let name = document.getElementById(ingrID + "i");
    let id = ingrID
    name.addEventListener('input', (event) => {
        ingredients[id] = event.target.value
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
    ingredients.pop();
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
    var id = stepID
    name.addEventListener('input', (event) => {
        steps[id] = event.target.value
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
    steps.pop()
}

function save() {
    recipe.ingredients = ingredients
    recipe.steps = steps
    var allRecipes = JSON.parse(localStorage["recipes"]);
    if (!(baseName === recipe.name)) {
        allRecipes.push(recipe);
    } else {
        allRecipes[index] = recipe;
    }
    localStorage["currentRecipe"] = recipe.name
    localStorage["recipes"] = JSON.stringify(allRecipes);
    console.log(recipe)
}

function initBody() {
    var currRecipe = new Recipe();
    var allRecipes = JSON.parse(localStorage["recipes"]);

    var i = 0;
    allRecipes.forEach(element => {
        if (element.name === localStorage["currentRecipe"]) {
            currRecipe = element;
            index = i;
        }
        i++;
    });

    document.getElementById('rname').setAttribute("value", currRecipe.name);
    document.getElementById('rating').setAttribute("value", currRecipe.rating);
    document.getElementById('diff').setAttribute("value", currRecipe.difficulty);
    document.getElementById('time').setAttribute("value", currRecipe.time);
    document.getElementById('health').setAttribute("value", currRecipe.health);
    document.getElementById('image').setAttribute("src", "images/" + currRecipe.img);

    ingredients = currRecipe.ingredients;
    for (let i = 0; i < ingredients.length; i++) {
        addIngr();
        document.getElementById(i + 'i').setAttribute("value", ingredients[i]);
    }
    steps = currRecipe.steps;
    for (let i = 0; i < steps.length; i++) {
        addStep();
        document.getElementById(i).setAttribute("value", steps[i]);
    }
    recipe = currRecipe
    baseName = currRecipe.name;

    let name = document.getElementById('rname');
    name.addEventListener('input', (event) => {
        recipe.name = event.target.value;
        recipe.img = event.target.value + ".jpg";
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
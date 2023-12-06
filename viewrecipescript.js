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

function initBody() {
    var currRecipe = new Recipe();
    var allRecipes = JSON.parse(localStorage["recipes"]);

    allRecipes.forEach(element => {
        if (element.name === localStorage["currentRecipe"]) {
            currRecipe = element
        }
    });
    var name = document.getElementById('name');
    name.innerHTML = currRecipe.name
    document.getElementById('rating').innerHTML = "Rating: " + currRecipe.rating + "⭐";
    document.getElementById('diff').innerHTML = "Difficulty: " + currRecipe.difficulty;
    document.getElementById('time').innerHTML = "Cook time: " + currRecipe.time;
    document.getElementById('health').innerHTML = "Health rating: " + currRecipe.health;
    document.getElementById('image').setAttribute("src", "images/" + currRecipe.img);
    var ingr = document.getElementById('ingr');
    currRecipe.ingredients.forEach(element => {
        var li = document.createElement("li");
        li.setAttribute("class", "ingredient")
        li.innerHTML = element;
        ingr.append(li)
    })
    var steps = document.getElementById('steps');
    currRecipe.steps.forEach(element => {
        var li = document.createElement("li");
        li.setAttribute("class", "step")
        li.innerHTML = element;
        steps.append(li)
    })

}


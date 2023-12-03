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
    var p = document.getElementById('test');
    var allRecipes = JSON.parse(localStorage["recipes"]);

    allRecipes.forEach(element => {
        if (element.name === localStorage["currentRecipe"]) {
            currRecipe = element
        }
    });
    //p.innerHTML = JSON.stringify(currRecipe);
}


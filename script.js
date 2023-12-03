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
function displayRecipe(recipe) {
    var div = document.getElementById('recipe');
    var a = document.createElement('a');
    a.setAttribute("href", "viewrecipe.html");
    a.setAttribute("class", "grid-item");
    a.setAttribute("onclick", "encodeRecipe(\"" + recipe.name + "\");");
    a.innerHTML = '<img id="' + recipe.name + '" src="images/' + recipe.img + '" width="150" /> <p>' + recipe.name + ' ⭐ ' + recipe.rating + '</p>';
    div.append(a)
}

function encodeRecipe(recipe) {
    localStorage["currentRecipe"] = recipe;
}


recipes = [];

function makeRecipes() {

    const burgerIngr = new Map([
        ["Mayonnaise", "1/4 cup"],
        ["Dijon mustard", "1 tbps"],
        ["Ketchup", "1 tbsp"],
        ["Ground chuck 90:10", "1 pound"],
        ["Potato buns", "3"],
        ["American cheese slices", "6"],
    ]);
    const burgerSteps = ["In a small bowl, mix the mayonnaise, mustard, and ketchup together until smooth. Set aside.", "Preheat a large sturdy skillet (cast iron is best) over medium heat. Loosely divide the ground beef into three 1/3-pound patties. Shape into discs about 1/2 inch thick and put a divot in the center of each patty to prevent swelling in the center. Season the patties with 1/2 teaspoon of seasoning mix per side of the patty, if using.", "Cook the burgers: Turn on the fan over the stove and open a window to help with air flow. Spray your skillet with a little non-stick spray and place burgers in the skillet. Press down on each patty with a spatula for 10 seconds. This is to encourage browning. Cook the burgers over medium heat for 4 minutes. Don’t touch them too much so you get a nice crust on the first side. Use a sturdy metal spatula to flip the burgers, being sure to scrape up any caramelization with the burger.", "After you flip the burgers, add the cheese, if using, and continue to cook for 3 minutes until the burger is cooked to desired doneness, usually medium. If you are only cooking one burger, you can toast your buns in the same skillet as your patty, or you can toast them separately if you are cooking multiple burgers at once. If you want the cheese to be very melted, cover the burgers with a lid for the last minute of cooking.", "Build your burgers by spreading some burger sauce on each bun. Put the burgers on the bottom bun and top with the top bun. Serve immediately with a cold drink."];
    var burger = new Recipe("Cheeseburger", "burger.jpg", 4, 2, 2, "1 hour", "Dinner", burgerIngr, burgerSteps);
    recipes.push(burger);

    const saladIngr = new Map([
        ["Large garlic cloves, divided", "2"],
        ["Unsalted butter", "3 tbps"],
        ["Extra-virgin olive oil", "2 tbps"],
        ["White bread slices torn into 1- to 2-inch pieces", "2 cups"],
        ["Kosher salt", "1/2 tbps"],
        ["Lemons", "2"],
        ["Mayonnaise", "3/4 cup"],
        ["Parmesan cheese", "1 ounce"],
        ["Dijon mustard", "2 tsp"],
        ["Anchovy paste", "1 tsp"],
        ["Black pepper", "1/2 tsp"],
        ["Center-cut salmon fillet", "1"],
        ["Little Gem lettuce", "8 cups"]
    ]);
    const saladSteps = ["Grate 1 garlic clove, and place in a small microwavable bowl; add butter and oil. Cover with a paper towel, and microwave on high until butter is melted, about 1 minute. Stir to combine. Place bread pieces in a large bowl, and drizzle with butter mixture; toss to coat. Sprinkle with a pinch of salt. Set aside.", "Preheat a gas grill to medium-high (400°F to 450°F) on one side, or push hot coals to one side of a charcoal grill. While grill preheats, juice 1 lemon to equal 2 tablespoons juice; place juice in a small bowl. Grate remaining garlic clove, and add to lemon juice in bowl. Whisk in mayonnaise, grated Parmesan, mustard, anchovy paste, and 1/4 teaspoon pepper until combined. Set aside 1/3 cup mayonnaise mixture for spreading over salmon; reserve remaining mayonnaise mixture as dressing for serving.", "Cut remaining lemon in half crosswise. Sprinkle salmon with remaining 1/2 teaspoon salt. Spread reserved 1/3 cup mayonnaise mixture over salmon. Sprinkle with remaining 1/4 teaspoon pepper. Place salmon, skin side down, on oiled grates over unlit side of grill. Place lemon halves, cut sides down, on oiled grates over lit side of grill. Grill, covered, until lemon halves are charred, salmon flakes easily, and a thermometer inserted in thickest portion of fillet registers 125°F, 20 to 25 minutes, removing lemons from grill after about 12 minutes. As lemon halves and salmon finish grilling, transfer to a baking sheet. Add bread pieces to grates over lit side of grill; grill, uncovered, turning often, until browned and crisp, 5 to 8 minutes.", "Scatter lettuce leaves on a large platter. Using a fork, break off chunks of salmon from its skin, and arrange over lettuce; discard salmon skin. Top with croutons and desired amount of dressing. Squeeze charred lemon halves over salad. Garnish with shaved Parmesan, if desired."];
    var salad = new Recipe("Caesared Salmon Salad", "salad.JPG", 2, 5, 2, "50 mins", "Side", saladIngr, saladSteps);
    recipes.push(salad);

    const pancakeIngr = new Map([
        ["All-purpose flour", "1 1/2 cups"],
        ["Baking powder", "3 1/2 tsp"],
        ["White powder", "1 tbsp"],
        ["Salt", "1/4 tsp"],
        ["Milk", "1 1/4 cups"],
        ["Butter, melted", "3 tbps"],
        ["Egg", "1"]
    ]);
    const pancakeSteps = ["Sift flour, baking powder, sugar, and salt together in a large bowl. Make a well in the center and add milk, melted butter, and egg; mix until smooth.",
        "Heat a lightly oiled griddle or pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake; cook until bubbles form and the edges are dry, about 2 to 3 minutes. Flip and cook until browned on the other side. Repeat with remaining batter."]
    var pancake = new Recipe("Good Old-Fashioned Pancakes", "pancake.jpg", 5, 1, 3, "20 mins", "Breakfast", pancakeIngr, pancakeSteps);
    recipes.push(pancake);

    const grilledCheeseIngr = new Map([
        ["Artisan-style bread", "4 slices"],
        ["Sharp Cheddar cheese", "4 slices"],
        ["Softened butter", "2 tbps"]
    ])
    const grilledCheeseSteps = ["Place bread slices on a cutting board and carefully remove crusts.",
        "Using a rolling pin, flatten the bread widthwise. Spread butter on outer edges of the bread.",
        "Place one slice of cheese on the non-buttered side. Roll bread and cheese together to create a spiral effect.",
        "Heat a heavy skillet over medium high heat. Place roll up into then skillet, butter side down. Grill on all sides until golden brown. Remove roll ups and slice diagonally if desired. Enjoy."];
    var gCheese = new Recipe("Grilled Cheese Roll Ups", "grilledcheese.JPG", 3, 1, 2, "10 mins", "Side", grilledCheeseIngr, grilledCheeseSteps);
    recipes.push(gCheese)

    const chocolateIngr = new Map([
        ["Peanut butter", "1 cup"],
        ["Confectioners' sugar", "3/4 cup"],
        ["Graham cracker crumbs", "1 cup"],
        ["Semisweet chocolate chips", "2 cups"],
        ["Semisweet chocolate, chopped", "3 squares"],
        ["Shortening", "1 tbsp"]
    ])
    const chocolateSteps = ["In a medium bowl, mix together the peanut butter and confectioners' sugar until smooth. Stir in graham cracker crumbs until well blended. Form the dough into 1 inch balls by rolling in your hands, or by using a cookie scoop.",
        "Melt the semisweet chocolate chips, semisweet chocolate squares, and the shortening in the top half of a double boiler. Use a fork to dip the balls into the melted chocolate, and place on wax paper to cool until set."]
    var chocholate = new Recipe("Chocolate Balls", "chocolate.JPG", 1, 1, 3, "35 mins", "Dessert", chocolateIngr, chocolateSteps)
    recipes.push(chocholate)
    recipes.push(salad);
    recipes.push(salad);
    recipes.push(salad);
    recipes.push(salad);
    recipes.push(salad);
}

function initBody() {
    makeRecipes()
    for (let i = 0; i < recipes.length; i++) {
        displayRecipe(recipes[i])
    }
    localStorage["recipes"] = JSON.stringify(recipes);
}

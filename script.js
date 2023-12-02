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



function displayRecipe() {
    var node = document.getElementById('recipe');
    var div = document.createElement('div');
    div.setAttribute("class", "grid-item")
    div.innerHTML = '<a href="test.html"><img id="WPI" src="images/burger.jpg" width="150" /></a> <p>here</p>';
    node.append(div)
}

function initBody() {

    for (let i = 0; i < 3; i++) {
        displayRecipe();
    }
}

// function readFiles(dirname, onFileContent, onError) {
//     const $output = document.getElementById('output')
//     document.getElementById('file').onchange = function () {
//         var file = this.files[0];

//         var reader = new FileReader();
//         reader.onload = function (progressEvent) {
//             // Entire file
//             const text = this.result;
//             $output.innerText = text

//             // By lines
//             var lines = text.split('\n');
//             for (var line = 0; line < lines.length; line++) {
//                 console.log(lines[line]);
//             }
//         };
//         reader.readAsText(file);
//     };


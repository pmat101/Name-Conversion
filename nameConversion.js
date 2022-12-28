function convert() {
    let val = document.getElementById("text").value;

    // Camel Case
    const camel = [];
    for (let i = 0; i < val.length; i++) {
        if (val[i] == " ") {
            camel[i + 1] = val[i + 1].toUpperCase();
            i++;
        } else {
            camel[i] = val[i];
        }
    }
    document.getElementById("camel-case").innerText = camel.join("");

    // Pascal Case
    const pascal = [];
    pascal[0] = val[0].toUpperCase();
    for (let i = 1; i < val.length; i++) {
        if (val[i] == " ") {
            pascal[i + 1] = val[i + 1].toUpperCase();
            i++;
        } else {
            pascal[i] = val[i];
        }
    }
    document.getElementById("pascal-case").innerText = pascal.join("");

    // Snake Case
    const snake = [];
    for (let i = 0; i < val.length; i++) {
        if (val[i] == " ") {
            snake[i] = "_";
        } else {
            snake[i] = val[i];
        }
    }
    document.getElementById("snake-case").innerText = snake.join("");

    // Screaming Snake Case
    const scream = [];
    for (let i = 0; i < val.length; i++) {
        if (val[i] == " ") {
            scream[i] = "_";
        } else {
            scream[i] = val[i].toUpperCase();
        }
    }
    document.getElementById("screaming-snake-case").innerText = scream.join("");

    // Kebab Case
    const kebab = [];
    for (let i = 0; i < val.length; i++) {
        if (val[i] == " ") {
            kebab[i] = "-";
        } else {
            kebab[i] = val[i];
        }
    }
    document.getElementById("kebab-case").innerText = kebab.join("");

    // Screaming Kebeb Case
    const kebabScream = [];
    for (let i = 0; i < val.length; i++) {
        if (val[i] == " ") {
            kebabScream[i] = "-";
        } else {
            kebabScream[i] = val[i].toUpperCase();
        }
    }
    document.getElementById("screaming-kebab-case").innerText = kebabScream.join("");
}

document.getElementById("convert-btn").addEventListener("click", convert);
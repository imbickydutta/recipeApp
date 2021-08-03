let auto_div = document.getElementById("autocom-box");

let timerId;

async function searchName() {
    let query = document.getElementById("query").value;

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);

    console.log(res);

    let data = await res.json();

    console.log(data);
    return data.meals;
}

function throttleFunction() {
    timerId = setTimeout(() => {
        main();
        timerId = null;
    }, 200);
}

function appendName(d) {
    auto_div.innerHTML = null;
    d.forEach((el) => {
        // console.log(Title);
        let p = document.createElement("div");
        p.setAttribute("class", "suggestions")
        p.addEventListener("click", function transferText() {
            localStorage.setItem("recipe", JSON.stringify(el))
            window.location.href = "searchedRecipe.html"
        })
        p.innerHTML = `<div>
        <p>${el.strMeal}</p>
        <p class="smalltext">(${el.strCategory})</p>
        </div>
      <p class="smalltext">${el.strArea}</p>`;
        auto_div.append(p);
    });
}

async function main() {
    let name = await searchName();
    console.log(name);
    appendName(name);
}
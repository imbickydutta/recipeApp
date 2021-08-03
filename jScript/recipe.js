

function appendRecipe(content) {
    let container = document.getElementById("content");

    container.innerHTML = `
      <div class="flex center">
        
            <img src="${content.strMealThumb}" alt="">
        
        <h1>${content.strMeal} <span>(${content.strArea})</span>
        <p>(${content.strCategory})</p>
        </h1>
        
      </div>
    

    
      <div class="flex">
        <div class="ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>${content.strIngredient1} <span>${content.strMeasure1}</span></li>
            <li>${content.strIngredient2} <span>${content.strMeasure2}</span></li>
            <li>${content.strIngredient3} <span>${content.strMeasure3}</span></li>

            <li>${content.strIngredient4} <span>${content.strMeasure4}</span></li>
            <li>${content.strIngredient5} <span>${content.strMeasure5}</span></li>
            <li>${content.strIngredient6} <span>${content.strMeasure6}</span></li>
            <li>${content.strIngredient7} <span>${content.strMeasure7}</span></li>
            <li>${content.strIngredient8} <span>${content.strMeasure8}</span></li>
            <li>${content.strIngredient9} <span>${content.strMeasure9}</span></li>
            <li>${content.strIngredient10} <span>${content.strMeasure10}</span></li>
          </ul>
        </div>
        <div class="recipe">
          <h2>Recipe</h2>

           ${content.strInstructions}
        </div>
      </div>`;
}

export default appendRecipe;
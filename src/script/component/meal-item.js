class MealItem extends HTMLElement {
    /**
     * @param {any} meal
     */
    set meal(meal){
        this._meal = meal;
        this.render();
    }

    render(){
        this.innerHTML= `
        <div class="title">
            <h1>${this._meal.strMeal}</h1>
        </div>
        <div class= meal-img>
            <img class="meal-thumb" src="${this._meal.strMealThumb}" alt="Meal Thumb">
            <div class="Ingredient-list">
                <h2>Inggredient</h2>
                <p>${this._meal.strIngredient1}</p>
                <p>${this._meal.strIngredient2}</p>
                <p>${this._meal.strIngredient3}</p>
                <p>${this._meal.strIngredient4}</p>
                <p>${this._meal.strIngredient5}</p>
                <p>${this._meal.strIngredient6}</p>
                <p>${this._meal.strIngredient7}</p>
                <p>${this._meal.strIngredient8}</p>
                <p>${this._meal.strIngredient9}</p>
                <p>${this._meal.strIngredient10}</p>
                <p>${this._meal.strIngredient11}</p>
                <p>${this._meal.strIngredient12}</p>
            </div>      
        </div>
        <div class="meal-info">
            <h2>How to make ${this._meal.strMeal}</h2>
            <p>${this._meal.strInstructions}</p>
        </div>
        `;
    }
}

customElements.define('meal-item', MealItem);
const searchFood = () =>{
    const searchText = document.getElementById('search-food').value;
    const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=${searchText}`
 fetch(url)
 .then(response => response.json())
.then(data=> displayFoods(data.meals));
}
const displayFoods = foods => {
    const foodHolder = document.getElementById('food-holder');

    foods.forEach(food=>{
        
        const foodDiv = document.createElement('div');
        
        foodDiv.innerHTML = ` <div class="food-display">
            <h2>${food.strIngredient}</h2>
                <p class="food-menu">${food.strDescription}</p>
             </div> `
        foodHolder.appendChild(foodDiv);
        document.getElementById('search-food').value = ""
    })  
}
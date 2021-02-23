import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  
  const [filterBy, setFilterBY] = useState("All")

  function handleFilterChange(event){
      setFilterBY(event.target.value)
  }

  const foodsToDisplay = foods.filter((food) => {
    if(filterBy === "All"){
      return true ;
    } else {
      return food.cuisine === filterBy;
    }
  });
  // console.log(setFoods)
  function handleAddFood() {
    const newFood = getNewSpicyFood();
    // console.log(newFood)
    const newFoodArray = [...foods, newFood]
    // console.log(newFoodArray)
    setFoods(newFoodArray)
  }
  const foodLi = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine {food.cuisine}
      </li>
  ))

  function handleLiClick(id){
   
    // const newFoodArray = foods.filter((food) => food.id !== id)
      // console.log(id)
    const newFoodArray = foods.map((food) => {
      // console.log(food)
      if(food.id === id){
        return {
          ...food,
          heatLevel: food.heatLevel + 1
        }
      } else {
        return food;
      }
    });
    setFoods(newFoodArray)
  }

 

  
  return (
    <div>

<select name="filter" onChange={handleFilterChange}>
  <option value="All">All</option>
  <option value="American">American</option>
  <option value="Sichuan">Sichuan</option>
  <option value="Thai">Thai</option>
  <option value="Mexican">Mexican</option>
</select>
<button onClick={handleAddFood}>Add New Food</button>
<ul>{foodLi}</ul>
</div>
  );
  

}

export default SpicyFoodList;

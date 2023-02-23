async function fetchTwoResources () {
  try {
    const responsListOfDrinks = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
    const responsListOfDrinksInJSON = await responsListOfDrinks.json();
    
    const idDrink = responsListOfDrinksInJSON.drinks[0].idDrink;
    const lastRespons = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`);

    const lastResponsInJSON = await lastRespons.json();
    return lastResponsInJSON;
  } catch (err) {
    console.log(err);
  }
}
import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';


const App = () => {

  const APP_ID = 'c309101f';
  const APP_KEY = "2db72ff811e44348227f692100aa1d83";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch]   = useState("");
  const [query, setQuery]     = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data     = await response.json();

    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return(
    <div className="App">
      <h1>Recipe Search</h1>
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="searchBar" placeholder="Chicken" value={search} onChange={updateSearch} />
        <button className="searchButton" type="submit" >Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.count} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}  />
      ))}
    </div>
  );
}
export default App;

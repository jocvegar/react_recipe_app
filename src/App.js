import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
	const APP_ID = 'd65a23aa';
	const APP_KEY = '641b2187379ae1049339e4e4cfac7b54';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('');

	const exampleUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

	useEffect(() => {
		getRecipes();
		console.log("Effect has been run");
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(exampleUrl)
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data.hits);
	}

	const handleChange = (e) => {
		setSearch(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setQuery(search);
	}

	return (
		<div className="App">
			<h1>Find something to cook</h1>
			<form className="search-form" onSubmit={handleSubmit}>
				<input className="search-bar" type="text" value={search} onChange={handleChange}
					placeholder="What are we cooking today?" />
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			{recipes.map(recipe => (
				<Recipe
					title = {recipe.recipe.label}
					calories = {recipe.recipe.calories}
					image = {recipe.recipe.image}
					key = {recipe.recipe.url}
					ingredients = {recipe.recipe.ingredients}
				/>
			))}
		</div>
	);
}
export default App;

import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
	const APP_ID = 'd65a23aa';
	const APP_KEY = '641b2187379ae1049339e4e4cfac7b54';
	const exampleUrl = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		getRecipes();
		console.log("Effect has been run");
	}, []);


	const getRecipes = async () => {
		const response = await fetch(exampleUrl)
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data.hits);
	}

	const handleChange()

	return (
		<div className="App">
			<h1>Hello React!</h1>
			<form className="search-form">
				<input className="search-bar" type="text" value={search} onChange={} />
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
				/>
			))}
		</div>
	);
}
export default App;

import { generateTextAndImage } from "./utils.js";

// Select the user input elements
const nameInput = document.getElementById("name");
const activityInput = document.getElementById("favorite-activity");
const placeInput = document.getElementById("favorite-place");
const generateBtn = document.getElementById("generate-btn");

// Add event listener to the Generate button
generateBtn.addEventListener("click", () => {
	// Retrieve the user input values
	const name = nameInput.value;
	const favoriteActivity = activityInput.value;
	const favoritePlace = placeInput.value;
	const temperature = 0.6; // Set the desired temperature

	// Call the generateTextAndImage function with user input values
	generateTextAndImage(name, favoriteActivity, favoritePlace, temperature);
});

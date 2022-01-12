const boxIconList = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const boxHtml = document.getElementById('box-icon');

// createIcon(boxHtml, boxIconList);

// function createIcon(box, array) {

// 	array.forEach((icon) => {
// 		box.innerHTML += 
// 		`
// 			<div class="col-2 ${icon.type}">
// 				<i class="${icon.family} ${icon.prefix}${icon.name} ms_${icon.color}"></i>
// 				<p>${icon.name.toUpperCase()}</p>
// 			</div>
// 		`
// 	});
// }

boxIconList.forEach((icon) => {
	boxHtml.innerHTML += 
	`
		<div class="col-2 ${icon.type}">
			<i class="${icon.family} ${icon.prefix}${icon.name} ms_${icon.color}"></i>
			<p>${icon.name.toUpperCase()}</p>
		</div>
	`
});


const select = document.getElementById('select-filter');

const AnimalList = boxIconList.filter((attribute) => {
	return attribute.type == "animal";
});
const VegetableList = boxIconList.filter((attribute) => {
	return attribute.type == "vegetable";
});
const UserList = boxIconList.filter((attribute) => {
	return attribute.type == "user";
});

select.addEventListener('change', function () {
	if (select.value == 2) {
		console.log(AnimalList);
	} 
	else if (select.value == 3) {
		console.log(VegetableList);
	} 
	else if (select.value == 4) {
		console.log(UserList);
	} 
	else {
		console.log(boxIconList);
	}
});








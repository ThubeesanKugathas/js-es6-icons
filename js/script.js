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

// FUNCTIONS --------------------------------------------------------
function createIconBox(box, array) {
	
	array.forEach((icon) => {
		box.innerHTML += 
		`
		<div class="col-2 m-3 position-relative ms_height ms_bg-white  rounded-3">
			<div class="text-center position-absolute top-50 start-50 translate-middle ms_bg-white">
				<i class="${icon.family} ${icon.prefix}${icon.name} ms_${icon.color} ms_size ms_bg-white"></i>
				<p class="ms_text-size ms_bg-white">${icon.name.toUpperCase()}</p>
			</div>
		</div>
		`
	});
}

// --------------------------------------------------------------------

const boxHtml = document.getElementById('box-icon');

createIconBox(boxHtml, boxIconList);

const select = document.getElementById('select-filter');

// FILTER'S ARRAYS ------------------------------------------------
const animalList = boxIconList.filter((attribute) => {
	return attribute.type == "animal";
});
const vegetableList = boxIconList.filter((attribute) => {
	return attribute.type == "vegetable";
});
const userList = boxIconList.filter((attribute) => {
	return attribute.type == "user";
});

const filterList = [
	boxIconList,
	animalList,
	vegetableList,
	userList
];

// ADDEVENTLISTENER - FILTER
select.addEventListener('change', function () {
	const valore = select.value;
	boxHtml.innerHTML = '';
	createIconBox(boxHtml, filterList[valore - 1]);
});








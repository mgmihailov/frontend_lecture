var items = [
	{
		name: "Mug",
		quantity: 1,
		price: 6.70,
		condition: "good",
		additionalInfo: "A mug with Spidermen on it.",
		seller: "Josh"
	}, {
		name: "Slippers",
		quantity: 2,
		price: 10.00,
		condition: "excellent",
		additionalInfo: "A pair of slippers with the Star Wars logo on them.",
		seller: "Jake"
	}, {
		name: "Bike",
		quantity: 1,
		price: 275.50,
		condition: "good",
		additionalInfo: "A 1-year old mountain bike, in good shape but with a flat tire.",
		seller: "Maggie"
	}, {
		name: "Football",
		quantity: 1,
		price: 25.00,
		condition: "excellent",
		additionalInfo: "A brand new football. Only used once, no damage.",
		seller: "Ashley"
	}, {
		name: "Garden Chairs",
		quantity: 4,
		price: 83.20,
		condition: "good",
		additionalInfo: "Four comfortable garden chairs, a couple of years old but still very preserved.",
		seller: "Luke"
	}, {
		name: "Mouse",
		quantity: 1,
		price: 35.00,
		condition: "decent",
		additionalInfo: "A gaming mouse with very nice design, comfortable grip and additional buttons on the side.",
		seller: "Mary"
	}
];

function addItem(item) {
	var row = document.createElement("tr"),
		cell;
	for (var i in item) {
		cell = document.createElement("td");
		cell.innerHTML = item[i];
		row.appendChild(cell);
	}
	document.getElementsByTagName("tbody")[0].appendChild(row);
}

function populateTable() {
	for (var i in items) {
		addItem(items[i]);
	}
}

function error(msg) {
	var el = document.createElement("span");
	el.innerHTML = msg;
	el.className = "error";
	document.body.appendChild(el);
}

function success(msg) {
	var el = document.createElement("span");
	el.innerHTML = msg;
	el.className = "success";
	document.body.appendChild(el);
}

document.getElementById("add-item-button").addEventListener('click', function(e){
	e.preventDefault();
	
	var itemValues = [],
		nameInput = document.getElementById("add-item-name").children[1],
		quantityInput = document.getElementById("add-item-quantity").children[1],
		priceInput = document.getElementById("add-item-price").children[1],
		conditionInput = document.getElementById("add-item-condition").children[1],
		infoInput = document.getElementById("add-item-info").children[1],
		sellerInput = document.getElementById("add-item-seller").children[1];
		
	itemValues.push(nameInput.value);
	nameInput.value = "";
	itemValues.push(quantityInput.value);
	quantityInput.value = "";
	itemValues.push(priceInput.value);
	priceInput.value = "";
	if (conditionInput.value == "none") {
		error("You must select a condition!");
		return;
	} else {
		itemValues.push(conditionInput.value);
		conditionInput.value = "none";
	}
	itemValues.push(infoInput.value);
	infoInput.value = "";
	itemValues.push(sellerInput.value);
	sellerInput.value = "";
	
	addItem(itemValues);
	
	success("Item successfully added!");
}, false);

window.onload = function() {
	populateTable();
};
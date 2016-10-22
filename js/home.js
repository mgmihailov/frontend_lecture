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

var itemRows;

function addItem(item, itemIdx, shouldSetupEventListener) {
    var row = document.createElement("tr"),
        cell;
    row.id = itemIdx;
    row.className = "item";
    for (var i in item) {
        if (i !== "additionalInfo") {
            cell = document.createElement("td");
            cell.innerHTML = item[i];
            row.appendChild(cell);
        }
    }
    row.addEventListener('click', function(){
        showItemDetails(this.id);
    }, false);
    
    document.getElementsByTagName("tbody")[0].appendChild(row);
}

function showItemDetails(itemIdx) {
    document.getElementById("item-details-name").children[1].innerHTML = items[itemIdx].name;
    document.getElementById("item-details-quantity").children[1].innerHTML = items[itemIdx].quantity;
    document.getElementById("item-details-price").children[1].innerHTML = items[itemIdx].price;
    document.getElementById("item-details-condition").children[1].innerHTML = items[itemIdx].condition;
    document.getElementById("item-details-info").children[1].innerHTML = items[itemIdx].additionalInfo;
    document.getElementById("item-details-seller").children[1].innerHTML = items[itemIdx].seller;
    
    document.getElementById("item-details").className = "visible";
}

function hideItemDetails() {
    document.getElementById("item-details-name").children[1].innerHTML = "";
    document.getElementById("item-details-quantity").children[1].innerHTML = "";
    document.getElementById("item-details-price").children[1].innerHTML = "";
    document.getElementById("item-details-condition").children[1].innerHTML = "";
    document.getElementById("item-details-info").children[1].innerHTML = "";
    document.getElementById("item-details-seller").children[1].innerHTML = "";
    
    document.getElementById("item-details").className = "hidden";
}

function populateTable() {
    for (var i in items) {
        addItem(items[i], i);
    }
}

document.getElementById("add-item-button").addEventListener('click', function(e){
    e.preventDefault();
    
    var item = {},
        nameInput = document.getElementById("add-item-name").children[1],
        quantityInput = document.getElementById("add-item-quantity").children[1],
        priceInput = document.getElementById("add-item-price").children[1],
        conditionInput = document.getElementById("add-item-condition").children[1],
        infoInput = document.getElementById("add-item-info").children[1],
        sellerInput = document.getElementById("add-item-seller").children[1];
        
    item.name = nameInput.value;
    nameInput.value = "";
    item.quantity = parseInt(quantityInput.value);
    quantityInput.value = "";
    item.price = parseFloat(priceInput.value);
    priceInput.value = "";
    if (conditionInput.value == "none") {
        error("You must select a condition!");
        return;
    } else {
        item.condition = conditionInput.value;
        conditionInput.value = "none";
    }
    item.additionalInfo = infoInput.value;
    infoInput.value = "";
    item.seller = sellerInput.value;
    sellerInput.value = "";
    
    items.push(item);
    addItem(item, items.length - 1, true);
    
    success("Item successfully added!");
}, false);

document.addEventListener('click', function(e){
    var itemDetailWidget = document.getElementById("item-details");
    if (e.path.indexOf(itemDetailWidget) === -1 && itemDetailWidget.className === "visible") {
        hideItemDetails();
    }
}, true);

window.onload = function() {
    populateTable();
};
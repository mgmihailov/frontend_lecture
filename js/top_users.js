var topSellers = [
    {
        firstName: 'Milko',
        surName: 'Petrov',
        lastName: 'Kailaidjiev',
        earnedAmount: '124лв.',
        image_path: 'images/milko.png'
    }, {
        firstName: 'Sansa',
        surName: 'Ned',
        lastName: 'Stark',
        earnedAmount: '124лв.',
        image_path: 'images/sansa.jpg'
    }, {
        firstName: 'Deneris',
        surName: 'Regar',
        lastName: 'Targarien',
        earnedAmount: '124лв.',
        image_path: 'images/deneris.jpg'
    }, {
        firstName: 'Tirion',
        surName: 'Tywin',
        lastName: 'Lannister',
        earnedAmount: '124лв.',
        image_path: 'images/tirion.jpg'
    }
];

var topBuyers = topSellers;

function appendTopUsersToTree(listName, list) {
    if(listName === 'sellers') {
        topSellersElement = document.getElementById('top-sellers');
        list.forEach(function(seller, index){
            topSellersElement.appendChild(buildTopUserPartial(seller));
        });
    } else if (listName === 'buyers') {
        topBuyersElement = document.getElementById('top-buyers');
        list.forEach(function(buyer, index){
            topBuyersElement.appendChild(buildTopUserPartial(buyer));
        });
    }
}

function buildTopUserPartial(user) {
    container = document.createElement('div');
    userPicture = buildUserImage(user);
    userData = buildUserData(user);
    container.appendChild(userPicture);
    container.appendChild(userData);

    return container;
}

function buildUserImage(user) {
    imgContainer = document.createElement('div');
    imgContainer.setAttribute('class', 'image-container');

    img = document.createElement('img');
    img.setAttribute('src', user.image_path);
    img.setAttribute('class', 'top-user-picture');

    imgContainer.appendChild(img);
    return imgContainer;
}

function buildUserData(user) {
  dataContainer = document.createElement('div');
  dataContainer.setAttribute('class', 'data-container');

  dataList = document.createElement('ul');
  for(var attr in user) {
    if(attr === 'image_path') { continue; }

    datum = user[attr];
    dataElement = document.createElement('li');
    dataElement.innerText = datum;
    dataList.appendChild(dataElement);
  }

  dataContainer.appendChild(dataList);
  return dataContainer;
}

window.onload = function() {
    appendTopUsersToTree('sellers', topSellers);
    appendTopUsersToTree('buyers', topBuyers);
};













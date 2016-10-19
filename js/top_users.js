var topSellers = [
    {
        firstName: 'Petar',
        surName: 'Petrov',
        lastName: 'Petrov',
        earnedAmount: '124лв.',
        image_path: 'images/some_name.jpg'
    }, {
        firstName: 'Petar',
        surName: 'Petrov',
        lastName: 'Petrov',
        earnedAmount: '124лв.',
        image_path: 'images/some_name.jpg'
    }, {
        firstName: 'Petar',
        surName: 'Petrov',
        lastName: 'Petrov',
        earnedAmount: '124лв.',
        image_path: 'images/some_name.jpg'
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
  img = document.createElement('img');
  img.setAttribute('src', user.image_path);
  img.setAttribute('class', 'top-user-picture');

  return img;
}

function buildUserData(user) {
  dataContainer = document.createElement('div');
  dataList = document.createElement('ul');
  for(var attr in user) {
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













/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Jeffrey Castellanos';
let currentYear =new Date().getFullYear();
let  profilePicture = 'w02-task/images/jeff_face.jpg';
let favoriteFoodList = ['Pizza', 'Hamburgers', 'Fried Chiken', 'Bacon' ]
let ul = `<ul>${favoriteFoodList.map(food => `<li>${food}</li>`).join('')}</ul>`
/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementsByTagName('img');  
/* Step 4 - Adding Content */
nameElement.innerHTML =`<strong>${fullName}</strong>`;
imageElement[0].setAttribute('src', profilePicture);
foodElement.innerHTML = ul





/* Step 5 - Array */







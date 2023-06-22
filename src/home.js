import { highlightItem } from './highlightItem.js';

export function home(root) {
    
    highlightItem('home');
    
    let container = document.createElement('div');

    container.classList.add('container');

    //

    let imageDiv = document.createElement('div');

    imageDiv.classList.add('imageDiv');

    const foodImages = ['chili.jpg', 'egg.jpg', 'noodles.jpg'];

    let chosenImage = foodImages[Math.floor(Math.random() * foodImages.length)];

    let foodImage = document.createElement('img');

    foodImage.src = `./${chosenImage}`;

    imageDiv.appendChild(foodImage);

    container.appendChild(imageDiv);

    //

    let textDiv = document.createElement('div');

    textDiv.classList.add('textDiv');

    container.appendChild(textDiv);

    //

    root.appendChild(container);

}
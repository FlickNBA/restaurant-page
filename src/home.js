import { highlightItem } from './highlightItem.js';

export function home(root) {
    
    highlightItem('home');
    
    let container = document.createElement('div');

    container.classList.add('container');

    //

    let imageDiv = document.createElement('div');

    imageDiv.classList.add('imageDiv');

    const foodImages = ['egg.jpg', 'fish.jpg', 'noodles.jpg', 'soup.jpg'];

    const R = Math.floor(Math.random() * foodImages.length);

    const foodTexts = ['fried and delicious egg', 'orange curry fish', 'oriental spicy noodles', 'traditional Pho soup'];

    let chosenImage = foodImages[R];

    let chosenText = foodTexts[R];

    let foodImage = document.createElement('img');

    foodImage.classList.add('foodImage');

    foodImage.src = `./${chosenImage}`;

    imageDiv.appendChild(foodImage);

    container.appendChild(imageDiv);

    //

    let textDiv = document.createElement('div');

    let pText = `Welcome to our website. We offer quality Thai food such as <strong>${chosenText}</strong> you can see on your left! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris tellus, ornare a maximus ac, lacinia ac purus. Morbi non ipsum eu urna gravida fringilla.`

    textDiv.classList.add('textDiv');

    let P = document.createElement('p');

    P.innerHTML = pText;

    textDiv.appendChild(P);

    container.appendChild(textDiv);

    //

    root.appendChild(container);

}
export function startUp(root) {

    let topBar = document.createElement('div');
    topBar.classList.add('topBar');

    let topBarH1 = document.createElement('h1');
    topBarH1.innerHTML = 'Thai Food Near Me';
    topBar.appendChild(topBarH1);

    let topBarH3 = document.createElement('h3');
    topBarH3.innerHTML = 'Best coconut curry you will ever taste!';
    topBar.appendChild(topBarH3);

    root.appendChild(topBar);

    //

    let menuBar = document.createElement('div');
    menuBar.classList.add('menuBar');

    

    root.appendChild(menuBar);

}
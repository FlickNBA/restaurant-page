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

    let menuNav = document.createElement('nav');

    let menuUl = document.createElement('ul');

    let menuItems = ['Home', 'Menu', 'Contact'];

    menuItems.forEach(item => {
        console.log(item);
        let listItem = document.createElement('li');
        listItem.id = item.toLowerCase();
        listItem.innerHTML = item;
        menuUl.appendChild(listItem)
    })

    menuNav.appendChild(menuUl)

    menuBar.appendChild(menuNav);

    root.appendChild(menuBar);

    //

    let rest = document.createElement('div');
    
    rest.classList.add('rest');

    root.appendChild(rest);

    //

    let footer = document.createElement('div');

    footer.classList.add('footer');

    let footerH1 = document.createElement('h1');

    footerH1.innerHTML = 'Website created by one and only Flick NBA!';

    footer.appendChild(footerH1);

    root.appendChild(footer);

}
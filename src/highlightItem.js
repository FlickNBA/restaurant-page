export function highlightItem(ID) {

    let items = document.querySelectorAll('.menuBar nav ul li');
    console.log(items);

    items.forEach(item => {
        item.classList.remove('highlighted');
    })

    let item = document.querySelector(`#${ID}`);
    item.classList.add('highlighted');
}
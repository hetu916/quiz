

let bagItems;
onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}

function Addtobag(itemid) {
    bagItems.push(itemid);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}
function displayBagIcon() {
    let bagItemsCountElements = document.querySelector('.bag-items-count');
    if (bagItems.length > 0) {
        bagItemsCountElements.style.visibility = 'visible';
        bagItemsCountElements.innerHTML = bagItems.length;

    } else {
        bagItemsCountElements.style.visibility = 'hidden';
    }




}

function displayItemsOnHomePage() {
    itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }
    let innerHtml = '';
    item.forEach(item => {
        innerHtml += `
    <div class="item-container">
     <img src="${item.images}" alt="item-img" style="height: 250px;width: 100%; margin-left: 3px">
        <div class="rating">${item.rating.stars} ⭐| ${item.rating.reviews}k</div>
         <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
            <div class="prize">
                        <span class="current-price">${item.current_price}</span>
                        <span class="original-price">${item.original_price}</span>
                        <span class="dicount">${item.dicount}% OFF</span>
    
          </div>
                    <button class="btn btn-success mt-2 btn-add-bag"onclick="Addtobag(${item.id}) ">Add to bag</button>
    </div>`
    });

    itemsContainerElement.innerHTML = innerHtml;
}


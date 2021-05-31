 let barMenu = document.querySelector('.bar-menu-link');
 let barMenuImg = document.querySelector('bar-menu');
 let navListElement = document.querySelector('.nav-list');
 let navBtnElement = document.querySelector('.nav-btn');
 let navListItemsElement = document.querySelectorAll('.nav-link');

 barMenu.addEventListener('click', ()=>{
    barMenu.classList.toggle('activated');
    navListElement.classList.toggle('activated');
    navBtnElement.classList.toggle('activated')
 });

 
 navListItemsElement.forEach(navItem => {
    navItem.addEventListener('click', ()=> {
        menuBtnElement.classList.remove('activated');
        navListElement.classList.remove('activated');
        navBtnElement.classList.remove('avtivated')
    })
})





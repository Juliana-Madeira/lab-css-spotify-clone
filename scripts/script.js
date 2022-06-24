let toggleMenu = document.querySelector('.bar__button');

toggleMenu.onClick = function(){
    let menu = document.querySelector('.navbar__list');
    menu.classList.toggle('menu__toggling')
}
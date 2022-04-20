// open menu
let openMenu = document.querySelector('.sidebar__open');
let sidebar = document.querySelector('.sidebar');
let main = document.querySelector('.main');

openMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    sidebar.classList.toggle('sidebar--active');
    main.classList.toggle('main--active');
})

// active menu header
let headerList = document.querySelectorAll('.header__menu--list .header__menu--item');
let activeModule = document.querySelector('.module');

function removeActiveMenu() {
    headerList.forEach((menu) => {
        menu.classList.remove('active');
    })
}
headerList.forEach((item) => {
    item.addEventListener('click', () => {
        removeActiveMenu();
        item.classList.add('active');
        activeModule.classList.add('active');
        setTimeout(() => {
            activeModule.classList.remove('active');
        }, 1000)
    })
})

// form data
let openForm = document.getElementById('form-data');
let activeForm = document.querySelector('.formdata');
let closeForm = document.querySelector('.formdata__header--close');

clickToggle(openForm, activeForm);
clickToggle(closeForm, activeForm);

// count
let count0ne = document.getElementById('conut-one');
let countTwo = document.getElementById('conut-two');
let countThree = document.getElementById('conut-three');
let countFour = document.getElementById('conut-four');

function CountOption(start, end, cound){
    cound.innerHTML = start.toLocaleString();
    if(start < end) {
        setTimeout(() => {
            CountOption(start + 50, end, cound);
        }, 10);
    }
}

CountOption(0, 525090, count0ne);
CountOption(0, 1059680, countTwo);
CountOption(0, 0.00, countThree);
CountOption(0, 559680, countFour);

function clickToggle(subject, target) {
    subject.addEventListener('click', (e) => {
        e.stopPropagation();
        target.classList.toggle('active');
    })
}


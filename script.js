let searchBtn = document.getElementById('search');
let description = document.getElementById('firstInput');
let locarion = document.getElementById('secondInput');
let output = document.getElementById('output');
let oneBtn = document.getElementById('one');
let container = document.getElementById('container');
let page = 2;
state = {
        position: []
    }
    // console.log(state);
const fetchData = (page = 1) => {
    getParams(description.value, locarion.description);
    let targetUrl = `https://jobs.github.com/positions.json?description=${description.value}&location=${locarion.value}&page=${page}`;
    console.log(targetUrl);
    fetch(targetUrl)
        .then(function(resp) {
            return resp.json();
        })
        .then(position => {
            disabledBtn(position);
            state.position = state.position.concat(position);
            return position;
        })
        .then(position => getData(position))

}

const disabledBtn = (position) => {
    console.log(position.length);
    if (position.length == 0) {
        console.log('pos = 1');
        oneBtn.disabled = true;
        oneBtn.textContent = 'No more vacancy';
    } else {
        console.log('pos > 0');
    }
}

const createCard = (title, company, type, location, url) => {
    let card = document.createElement('div');
    let header = document.createElement('div');
    let body = document.createElement('div');
    let footer = document.createElement('div');
    let h5 = document.createElement('h5');
    let p = document.createElement('p');
    let link = document.createElement('a');

    card.classList = 'card text-start m-2';
    header.innerHTML = `${location}`;
    header.classList = 'card-header';
    body.classList = 'card-body';
    h5.classList = 'card-title';
    p.classList = 'card-text';
    p.textContent = `${company}`;
    h5.textContent = `${title}`;
    link.href = `${url}`;
    link.classList = 'btn btn-primary';
    link.textContent = 'Подробнее';
    body.appendChild(h5)
    body.appendChild(p)
    body.appendChild(link);
    footer.classList = 'card-footer text-muted'
    footer.textContent = `${type}`
    output.appendChild(card);
    card.appendChild(header);
    card.appendChild(body);
    card.appendChild(footer);
}

const getData = (data) => {
    data.map(elem => {
        // console.log(elem);
        createCard(elem.title, elem.company, elem.type, elem.location, elem.url);
    })
}

getParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    let descriptionParam = urlParams.get('description');
    let locationParam = urlParams.get('location');
    if (descriptionParam != null) {
        description.value = descriptionParam;
    } else {
        description.value;
    }

    if (locationParam != null) {
        locarion.value = locationParam;
    } else {
        locarion.value
    }
}


window.addEventListener('load', () => {
    fetchData();
});
searchBtn.addEventListener('click', () => {
    fetchData();
});



oneBtn.addEventListener('click', (position) => {
    while (position.length >= 0) {
        page = 2;
        return page++;
    }
    fetchData(page++);
})

// var scroller = document.querySelector('#scroller'); //окно куда рендарятся данные
// var sentinel = document.querySelector('#sentinel'); //заглушка после рендера

// function loadItems(n) { // кол-во элементов
//     for (var i = 0; i < n; i++) {
//         var newItem = document.createElement('div');
//         newItem.classList.add('item');
//         newItem.textContent = 'Item ' + counter++;
//         scroller.appendChild(newItem);
//     }
// }

// var intersectionObserver = new IntersectionObserver(entries => { //добавление элементов в конец страницы
//     if (entries[0].intersectionRatio <= 0) {
//         return;
//     }
//     loadItems(10);
//     scroller.appendChild(sentinel);
//     loadItems(5);
// });
// intersectionObserver.observe(sentinel);

// const images = document.querySelectorAll('.animate-me');

// observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.intersectionRatio > 0) {
//             entry.target.classList.add('fancy');
//         } else {
//             entry.target.classList.remove('fancy');
//         }
//     });
// });

// images.forEach(image => {
//     observer.observe(image);
// });
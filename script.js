let idBtn = document.getElementById('search');
let lang = document.getElementById('firstInput');
let city = document.getElementById('secondInput');
let output = document.getElementById('output');
let data = [];


idBtn.addEventListener('click', (e) => {
    let targetUrl = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${lang.value}&location=${city.value}`;
    console.log(targetUrl);

    fetch(targetUrl)
        .then(function(resp) {
            return resp.json();
        })
        .then(json => {
            json.forEach(elem => { createCard(elem.title, elem.company, elem.type, elem.location, elem.url) })
        })
    console.log(lang.value);
    console.log(city.value);

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
})
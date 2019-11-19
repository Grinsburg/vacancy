// let myInit = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     mode: 'no-cors',
//     cache: 'default',
//     body: JSON.stringify()
// }

// let myRequest = new Request("https://jobs.github.com/positions.json", myInit);
let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://jobs.github.com/positions.json'
console.log(proxyUrl + targetUrl);

fetch(proxyUrl + targetUrl)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        console.log(data);
    })


// fetch("https://jobs.github.com/positions.json?description=python", { mode: "no-cors" })
//     .then(
//         function(response) {
//             if (response.status = 200) {
//                 console.log('Loo!=ks like there was a problem. Status Code: ' +
//                     response.status);
//                 return;
//             }

//             // Examine the text in the response
//             response.json().then(function(data) {
//                 console.log(data);
//             });
//         }
//     )
//     .catch(function(err) {
//         console.log('Fetch Error :-S', err);
//     });

// fetch('https://jobs.github.com/positions.json', {
//     method: 'GET',
//     mode: 'no-cors',
//     headers: {
//         'Content-Type': 'application/json',
//     }
// }).then(function(response) {
//     console.log(response);
//     return response.json();

// }).catch(function(err) {
//     console.log(err)
// });


let idBtn = document.getElementById('search');
idBtn.addEventListener('click', function() {

})
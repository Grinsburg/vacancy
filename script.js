let myInit = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    mode: 'no-cors',
    cache: 'default'
}

let myRequest = new Request("https://jobs.github.com/positions.json?description=python&location=new+york", myInit);

fetch(myRequest)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        console.log(data);
    })
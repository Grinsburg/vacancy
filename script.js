let myInit = {
    mode: 'no-cors'
}

let myRequest = new Request("https://jobs.github.com/positions.json?description=python&location=new+york");

fetch(myRequest)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        console.log(data);
    })
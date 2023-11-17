let favNumber = 25;
let baseURL = "http://numbersapi.com"

// 1
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
    console.log(data)
});

let favNumbers = [23, 26, 28];

$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
    console.log(data);
});

let promises = Array.from({ length: 4}, () => $.getJSON(`${baseURL}/${favNumber}?json`));

Promise.all(promises)
    .then(facts => {
        facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
    })
    .catch(error => console.error("Error:", error));
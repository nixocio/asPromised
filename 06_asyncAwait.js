async function getData() {
    return {}
}

console.log(getData()) // returns a Promise

getData().then(response => console.log(response))
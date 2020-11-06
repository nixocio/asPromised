const fetch = require("node-fetch");

fetch("https://api.github.com/users/octocat")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("request done");
  });

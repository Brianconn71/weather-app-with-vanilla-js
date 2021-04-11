const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

form.addEventListener("submit", e =>{
    e.preventDefault();//prevents reload of page
    const inputVal = input.value;//gets the value the user entered into the searchbar
})

const apiKey = "73d94735253c37eef5165eb09f430c33";
const inputVal = input.value;

const url = `api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}`;

// pass in the url that we are accessing above
fetch(url)
// this returns a promise containing the response data so we use the json method to change the respnse to json format
    .then(response => response.json())
    // this then reurns another promise, when fulfilled the data is ready for manipulation
    .then(data=> {
        //do stuff with the data here
        console.log(response)
    })
    .catch(() => {
        console.log("Please search for a valid city");
    })
let data = [ 

{
    country: "Spain",
    capital: "Madrid",
},
{
    country: "France",
    capital: "Paris",
},
{
    country: "Uk",
    capital: "London",
},
{
    country: "Ireland",
    capital: "Dublin",
},
{
    country: "Germany",
    capital: "Berlin",
},
{
    country: "Turkey",
    capital: "Ankara",
}

];

let info = document.querySelector("#info");

let details = data.map(function(item123) {

    return "<div>" + "The capital of " + item123.country + " is " + item123.capital + '</div>' });

info.innerHTML = details.join("\n")


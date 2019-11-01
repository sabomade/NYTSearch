var NYTapi = "Tykasc2oGy89sdF1XiOBQPZNgVbSvzAG";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&api-key="+NYTapi;

var searchTerm = "Dogs";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
});
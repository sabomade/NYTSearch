var NYTapi = "Tykasc2oGy89sdF1XiOBQPZNgVbSvzAG";
var searchTerm = $(".search-term").attr()

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&api-key="+NYTapi;



$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(data){
    //data.response.docs
    console.log(data);

    //data.response.docs - for all articles returned
    var result = data.response.docs;    
    console.log(result);
});
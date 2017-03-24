function updateQuote(json) {
        var quoteAuthor = json.quoteAuthor ?
            json.quoteAuthor : "Author Unknown"
        $(".message").html(json.quoteText + 
                           "<br>" + 
                           "<h3>" + 
                             quoteAuthor + 
                           "</h3>"
                          );
}

function fetchQuote() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", updateQuote);
}

  var tweetQuote = function() {
    window.open(
      "https://twitter.com/intent/tweet?text=" +
  $('.message').text() + 
      "&hashtags=blessed&via=jgmz2");
  };

function updateCat(json) {
        $(".cats").html("<img src='" +
                        json.data.image_url+
                       "'>");
}

function fetchCat() {
    $.getJSON("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats", updateCat);
}

  
$(document).ready(function() {
    $("#getQuote").on("click", fetchQuote);
    $('#tweet').on('click', tweetQuote);
    $("#getCat").on("click", fetchCat);
});
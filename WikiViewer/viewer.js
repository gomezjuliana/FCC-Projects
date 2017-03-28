(function(){
  var httpRequest;
  document.getElementById("searchbutton").onclick = function(){
    var term = document.getElementById("searchterm").value;
    makeRequest("https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search="+term+"&limit=10");
     
  };
  
  function makeRequest(url) {
    httpRequest = new XMLHttpRequest();
    
    if (!httpRequest){
      console.log("Fail");
      return false;
    }
    httpRequest.onreadystatechange = printContents;
    httpRequest.open('GET', url);
    httpRequest.send();
  }
  function printContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var text = httpRequest.responseText;
        var jsonResponse = JSON.parse(text);
        console.log(jsonResponse);
        var finalResponse ="";
        for (var i=0; i<10; i++){
          var finalResponse = finalResponse + "<ul><dt><a class='resultslink' href="+jsonResponse[3][i]+" target='_blank'>"+jsonResponse[1][i]+"</a><dd>"+jsonResponse[2][i]+"</dd></ul>";
         } 
        document.getElementById("searchresults").innerHTML = finalResponse;
      } else {
        alert("there was a problem");
      }
    }
  }
})();
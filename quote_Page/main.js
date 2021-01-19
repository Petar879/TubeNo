//Send an http request to get the quote
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    //Some quotes have esacpe symbol (\')
    var response = xhr.responseText.replace(/[\\]/g, "");
    resp = JSON.parse(response);
    //Check if dark mode is enabled, and if so, do it needed changes
    chrome.storage.local.get(['darkModeEnabled'], function(result) {
      if(result.darkModeEnabled)
      {
        document.getElementById('logo').src = "../img/logo_dark.svg";
        document.body.classList.toggle("dark");
      }
   });
    document.getElementById("quoteText").innerText = ('"' + resp.quoteText + '"');
    //If the quote doesn't have an author, don't show '-'
    if(resp.quoteAuthor != "")
    {
      document.getElementById("quoteAuthor").innerText = ('-' + resp.quoteAuthor);
    }
  }
}
xhr.send(null);
// Semantic Pullquotes
document.addEventListener("DOMContentLoaded", function(event) {
  function pullQuote(el){
    var parentParagraph = el.parentNode;
    parentParagraph.style.position = 'relative';
    var clone = el.cloneNode(true);
    clone.setAttribute('class','semantic-pull-quote--pulled');
    // Hey y’all, watch this!
    parentParagraph.parentNode.parentNode.insertBefore(clone, parentParagraph.parentNode);

    if(!clone.getAttribute('data-content')){
      clone.setAttribute('data-content', clone.innerHTML );
      clone.innerHTML = null;
    }
  };

  var pullQuotes = document.getElementsByClassName('semantic-pull-quote');

  for(var i = 0; i < pullQuotes.length; i++) {
    pullQuote(pullQuotes[i]);
  }
});

const api_endpoint = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch='
const wiki_link = 'https://en.wikipedia.org/wiki/'

const box = document.querySelector('#searchBox')
const btn = document.querySelector('#searchButton')
const div = document.querySelector('#articlesContainer')

box.focus()
btn.addEventListener('click', function(){
  console.log(box.value);
  getArticle(box.value)
})
box.addEventListener('keypress', function(event){
  if(event.keyCode === 13){
    getArticle(box.value)
    }
})


function getArticle(val){
  $.ajax({
    url: api_endpoint + val,
    dataType: "jsonp",
    success: function( response ) {
      console.log( response );
      var article = ''
      response.query.search.forEach(function(art){
        article += '<a  href="wiki_link' + art.title + '">'
        article += '<h2>' + art.title + ' </h2>'
        article += '<p>' + art.snippet + ' </p>'
        article += '</a>'
      })
      div.innerHTML = article
      box.select()
    }
  });
}

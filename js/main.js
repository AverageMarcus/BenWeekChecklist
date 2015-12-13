var converter = new showdown.Converter({
  tasklists: true,
});
window.fetch('checklist.md')
  .then(function(response) {
    return response.text();
  })
  .then(function(body) {
    document.getElementById('checklist').innerHTML = converter.makeHtml(body);
    var listItems = document.querySelectorAll('#checklist li');
    for (var i = 0; i < listItems.length; i++) {
      var element = listItems[i];
      element.innerHTML = '<label>' + element.innerHTML + '</label>';
      var checkbox = element.childNodes[0].childNodes[0];
      checkbox.removeAttribute('disabled');
    }
    var links = document.querySelectorAll('a');
    for(var i=0; i<links.length; i++){
      links[i].setAttribute('target', '_blank');
    }
  });

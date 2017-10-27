var $searchButton = $('.search-icon');
var getData = function (searchText) {
  var searchQuery = searchText.replace(/ /g, '+');

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + searchQuery + '&type=video&maxResults=25&key=AIzaSyBMX_VIt5u5Ty2zSDaR0Wusor2lM19OGDo',
    success: function (result) {
      result.items.forEach(function(item) {
        $('body').append(
          '<img src='+ item.snippet.thumbnails.default.url +'>' +
          '<p>' + item.snippet.description + '</p>'
        )
      })
    }
  });
}

$searchButton.on('click', function (e) {
  e.preventDefault();
  var searchValue = $(this).siblings('input').val();
  $('.youtube-logo').css('background', 'green');

  getData(searchValue);
});


// 1. grab an element
// 2. add event or get value
// 3. do something with that information or have a function do some tasks.

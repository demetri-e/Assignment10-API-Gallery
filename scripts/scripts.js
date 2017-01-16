$(document).ready(function() {
  var spotifyApi = "https://api.spotify.com/v1/albums/?ids=14xxjLlbGy8ACm4MorBjD5,17PCdEFGtQnG000HqzjCBm,5Y0p2XCgRRIjna91aQE8q7,2knqSBcOWs653RwwmDzsME,4l4u9e9jSbotSXNjYfOugy,147DL1IIXb9YgFM3nnbIIG,6x2n6wj3WvkRi8J8gxEcF0,4or7bC7lPqBTr7Nh1AUSsN,0UbSPt5ZvZOVLQhIo9P3rf,6A2T77SSF5TUglshWSQAiC,1ZXIVGFclttkyQDLgPGckD,5Z66aANYKRJOXULzME3cYf";
  var getAlbumInfo = function(albumData) {
    console.log(albumData);
    var albumHTML = '<ul>';
    $.each(albumData.albums, function(i, eachAlbum) {
      albumHTML += '<li class="albums"><a href="#">';
      albumHTML += '<img src="' + eachAlbum.images[0].url + '"  alt="' + eachAlbum.name + ' <br>by<br>  ' + eachAlbum.artists[0].name + '<br>' + eachAlbum.release_date + '"></a></li>';
    }); //end loop
    albumHTML += '</ul>';
    $('#main-gallery').html(albumHTML);


    $('img').click(function() {
      var boxHTML = '<div class="lightbox" id="lightbox">';
      boxHTML += '<div class="container">';
      boxHTML += '<img src="' + $(this).attr("src") + '" class="lightBoxImg">';
      boxHTML += '<p class = lightBoxText>' + $(this).attr("alt") + '</p>';
      boxHTML += '<div id="close" class="close"><p>close</p></div>';
      boxHTML += '</div>'
      boxHTML += '</div>';

      $('#main-gallery').append(boxHTML).hide().fadeIn(300);

      $('#close').click(function() {
        $(".lightbox").fadeOut(300, function() { $(this).remove(); });
      });


    }); //end lightbox


  }

  $.getJSON(spotifyApi, getAlbumInfo);




}); //end ready



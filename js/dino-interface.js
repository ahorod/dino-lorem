$(document).ready(function() {
  $('#dino-button').click(function() {
    var paragraphs = $('#paragraph').val();
    var words = $('#word').val();

    $.get('http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=' + paragraphs + '&words=' + words , function(response) {

      $('.result').text(response);
      console.log(response);
    });

  });

});

$(function() {

  //function
  function loadVid() {
    $.post('php/php.php',{id:nombreAl},function(data) {
      data = JSON.parse(data);
      $('#video').attr('src',data['src']);
      $('#video').attr('poster',data['poster']);
      $('.infos h1').html(data['titre']);
      $('.infos strong').html(data['dateSortie']);
      $('.infos p').html(data['description']);
      $('#video').data("id",data['id']);
    });
  }
  //Main code
  //first loaded page video
  var nombreAl = Math.floor(Math.random()*(20-1+1)) + 1;
  loadVid();
  // click prev or next button
  $('.left,.rigth').click(function(){
      nombreAl = Math.floor(Math.random()*(20-1+1)) + 1;
      var id = $('#video').data("id");
      (nombreAl == id ? nombreAl = Math.floor(Math.random()*(20-1+1)) + 1 : nombreAl);
      loadVid();
  });
});

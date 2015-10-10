$(document).ready(function() {
  $("form").submit(function(event) {
    var nameInput = $("input#name").val();
    var favSongInput = $("input#favSong").val();
    var favFoodInput = $("input#favFood").val();
    var favDestinationInput = $("input#favDestination").val();
    var favColorInput = $("input#favColor").val();

    $(".name").text(nameInput);
    $(".favSong").text(favColorInput);
    $(".favFood").text(favFoodInput);
    $(".favDestination").text(favDestinationInput);
    $(".favColor").text(favColorInput);

    $("#favoriteList").show();
    event.preventDefault();
  });
});

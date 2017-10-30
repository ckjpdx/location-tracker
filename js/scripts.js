function Visit(country, location, landmarks, time, notes) {
  this.country = country;
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

$(document).ready(function() {
  var visits = [];
  $("#visited-form").submit(function(event) {
    event.preventDefault();
    var country = $("input#input-country").val();
    var location = $("input#input-location").val();
    var landmarks = $("input#input-landmarks").val();
    var time = $("input#input-time").val();
    var notes = $("input#input-notes").val();
    var newVisit = new Visit(country, location, landmarks, time, notes);
    visits.push(newVisit);

    $("ul#visitedPlaces").append("<li><span class='registeredLocation visits-index" + (visits.length - 1) + "'>" + newVisit.country + "</span></li>");
    $("input").each(function(){
      $(this).val("");
    });
    $('.registeredLocation').last().click(function(){
      $(".place-info").show();
      $(".place-country").text(newVisit.country);
      $(".place-location").text(newVisit.location);
      $(".place-landmarks").text(newVisit.landmarks);
      $(".place-time").text(newVisit.time);
      $(".place-notes").text(newVisit.notes);
    });
  });
});

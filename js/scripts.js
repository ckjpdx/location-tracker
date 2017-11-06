function Visit(visitId, country, location, landmarks, time, notes) {
  this.visitId = visitId;
  this.country = country;
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

$(document).ready(function() {
  var visits = [];
  var visitId = 0;
  $("#visited-form").submit(function(event) {
    event.preventDefault();
    var isFormFilled = true;
    $("input").each(function(){
      if ($(this).val().length === 0) {
        isFormFilled = false;
        console.log('isFormFilled false');
      }
    });
    if (isFormFilled) {
      var country = $("input#input-country").val();
      var location = $("input#input-location").val();
      var landmarks = $("input#input-landmarks").val();
      var time = $("input#input-time").val();
      var notes = $("input#input-notes").val();
      var visit = new Visit(visitId, country, location, landmarks, time, notes);
      visits.push(visit);
      console.log(visits);
      $("ul#visitedPlaces").append("<li><span class='registeredLocation' id='" + visitId + "'>" + visit.country + "</span></li>");
      visitId++;
      $("input").each(function(){
        $(this).val("");
      });
      $('.registeredLocation').last().click(function(){
        $(".place-country").text(visit.country);
        $(".place-location").text(visit.location);
        $(".place-landmarks").text(visit.landmarks);
        $(".place-time").text(visit.time);
        $(".place-notes").text(visit.notes);
      });
    } else {
      alert('Please fill in the form entirely');
    }
  });
});

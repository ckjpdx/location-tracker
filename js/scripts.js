// plan to replace indexing system with object[index] system

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
  var clickedId = 0;
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
    } else {
      alert('Please fill in the form entirely');
    }
    $('span.registeredLocation').click(function(){
      $(".registeredLocation").css('background-color','inherit'); // reset all library colors
      $(this).css("background-color","#CCF"); // highlight selected listing
      console.log('location click');
      clickedId = parseInt($(this).attr("id"));
      visits.forEach(function(visitInArray){
        if (visitInArray.visitId === clickedId) {
          currentVisitObject = visitInArray;
          $("input#input-country").val(visitInArray.country);
          $("input#input-location").val(visitInArray.location);
          $("input#input-landmarks").val(visitInArray.landmarks);
          $("input#input-time").val(visitInArray.time);
          $("input#input-notes").val(visitInArray.notes);
        }
      });
    });
    $('button#delete-visit').click(function(){
      console.log('delete clicked');console.log(clickedId);
      $('span.registeredLocation').each(function(){
        if (parseInt($(this).attr('id')) === clickedId) {
          $(this).remove();
        }
      });
      visits.forEach(function(visitInArray, index){
        if (visitInArray.visitId === clickedId) {
          visits.splice(index, 1);
        }
      });
      $("input").each(function(){
        $(this).val("");
      });
    }); // delete button
    $('button#update-visit').click(function(){
      visits.forEach(function(visitInArray){
        if (visitInArray.visitId === clickedId) {
          visitInArray.country = $("input#input-country").val();
          visitInArray.location = $("input#input-location").val();
          visitInArray.landmarks = $("input#input-landmarks").val();
          visitInArray.time = $("input#input-time").val();
          visitInArray.notes = $("input#input-notes").val();
        }
      });
      $("input").each(function(){
        $(this).val("");
      });
    });
  });
});

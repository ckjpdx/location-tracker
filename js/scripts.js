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
    var country = $("input#input-country").val();
    var location = $("input#input-location").val();
    var landmarks = $("input#input-landmarks").val();
    var time = $("input#input-time").val();
    var notes = $("input#input-notes").val();
    var newVisit = new Visit(visitId, country, location, landmarks, time, notes);
    visits.push(newVisit);
    $("ul#visitedPlaces").append("<li><span class='registeredLocation' id='" + visitId + "'>" + newVisit.country + "</span></li>");
    visitId++;
    $("input").each(function(){
      $(this).val("");
    });
    $('.registeredLocation').last().click(function(){
      var thisId = $(this).attr('id');
      var thisObj = {};
      visits.forEach(function(each){
        if (thisId === each.visitId) {
          thisObj = each;
          console.log(each);
          console.log(thisObj);
          $(".place-country").text(thisObj.country);
          $(".place-location" + thisId).text(thisObj.location);
          $(".place-landmarks" + thisId).text(thisObj.landmarks);
          $(".place-time" + thisId).text(thisObj.time);
          $(".place-notes" + thisId).text(thisObj.notes);
        } else {
          thisObj = each;
          console.log('else');
          console.log(thisId);
          console.log(each);
          console.log(thisObj);
        }
      });
    });
  });
});

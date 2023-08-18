// ReadMoreButton.js

$(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Read More") {
      // Stuff to do when the button is in the "Read More" state
      $("#toggle").text("Read Less");
      $("#text").slideDown();
    } else {
      // Stuff to do when the button is in the "Read Less" state
      $("#toggle").text("Read More");
      $("#text").slideUp();
    }
  });
});

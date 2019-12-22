/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

$(document).ready(function () {
  // the tab click and scroll, maybe rewrite it to make it less repetitive
  var homepos = 0;
  var workspos = $("#works").position().top - 32;
  $("#homeLink").click(function (event) {
    event.preventDefault();
    $("#main").animate({ scrollTop: homepos }, 300);
  });
  $("#worksLink").click(function (event) {
    event.preventDefault();
    $("#main").animate({ scrollTop: workspos }, 300);
  });
  $('#burger-menu').click(function () {
    $('#nav').toggleClass('hamburger')
  });

});

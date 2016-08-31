$(document).foundation();
$(document).ready(function() {
  $(window).scroll(function() {
    $('#menu-chevron').css('top', $(document).scrollTop())
  })
  $('#menu-chevron').click(function() { window.scroll(0,0) } )
})

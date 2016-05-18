// click event listeners
(function(){
  handleMainNav = function() {
    $('.icon-home').on('click', function() {
      $('.tab-content').hide();
      $('#about').fadeIn('#about');
    });
    $('.icon-work').on('click', function() {
      callJobs();
      $('.tab-content').hide();
      $('#work').fadeIn('#work');
    });
    $('.icon-home').click();
  };

  handleMainNav();
  getJSON();
})(window);

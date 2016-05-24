(function(context) {
  var aboutController = {};

  aboutController.index = function() {
    $('.tab-content').hide();
    $('#about').fadeIn('slow');

  };

  context.aboutController = aboutController;
})(window);

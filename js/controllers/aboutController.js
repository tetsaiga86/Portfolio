(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('.tab-content').hide();
    $('#about').fadeIn('slow');

  };

  module.aboutController = aboutController;
})(window);

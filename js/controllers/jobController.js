(function(module) {
  var jobController = {};

  jobController.index = function() {
    $('.tab-content').hide();
    $('#work').fadeIn('slow');
  };

  module.projectController = projectController;
})(window);

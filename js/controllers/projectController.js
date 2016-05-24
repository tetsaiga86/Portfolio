(function(module) {
  var projectController = {};

  projectController.index = function() {
    $('.tab-content').hide();
    $('#project').fadeIn('slow');
  };

  module.projectController = projectController;
})(window);

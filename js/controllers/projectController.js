(function(context) {
  var projectController = {};

  projectController.index = function() {
    $('.tab-content').hide();
    $('#project').fadeIn('slow');
  };

  context.projectController = projectController;
})(window);

(function(context) {
  var jobController = {};

  jobController.index = function() {
    $('.tab-content').hide();
    $('#work').fadeIn('slow');
  };

  context.jobController = jobController;
})(window);

// click event listeners
(function(){
  handleMainNav = function() {
    $('.icon-home').on('click', function() {
      $('.tab-content').hide();
      $('#about').fadeIn('slow');
    });
    $('.icon-work').on('click', function() {
      renderJobs();
      $('.tab-content').hide();
      $('#work').fadeIn('slow');
    });
    $('.icon-project').on('click', function() {
      renderProjects();
      $('.tab-content').hide();
      $('#project').fadeIn('slow');
    });
    $('.icon-home').click();
  };

  var renderJob = function(job){
    var source = $('#job-template').html();
    var template = Handlebars.compile(source);
    return template(job);
  };

  var renderJobs = function(){
    var htmlSnippets = jobs.map(renderJob);

    var htmlString = htmlSnippets.reduce(function(prev, current){
      return prev + current;
    });

    $('#jobs').append(htmlString);

  };

  var renderProject = function(project){
    var source = $('#project-template').html();
    var template = Handlebars.compile(source);
    return template(project);
  };

  var renderProjects = function(){
    var htmlSnippets = projects.map(renderProject);

    var htmlString = htmlSnippets.reduce(function(prev, current){
      return prev + current;
    });

    $('#projects').append(htmlString);

  };

  handleMainNav();
  retrieveJobHistory();
  retrieveProjectHistory();
})(window);

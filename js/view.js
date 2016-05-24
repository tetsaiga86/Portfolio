// click event listeners
(function(context){
  // handleMainNav = function() {
  //   // $('.icon-home').on('click', function() {
  //   //   $('.tab-content').hide();
  //   //   $('#about').fadeIn('slow');
  //   // });
  //   $('.icon-work').on('click', function() {
  //     $('.tab-content').hide();
  //     $('#work').fadeIn('slow');
  //   });
  //   // $('.icon-project').on('click', function() {
  //   //   $('.tab-content').hide();
  //   //   $('#project').fadeIn('slow');
  //   // });
  //   // $('.icon-home').click();
  // };

  var renderJob = function(job){
    var source = $('#job-template').html();
    var template = Handlebars.compile(source);
    return template(job);
  };

  var renderJobs = function(){
    var htmlSnippets = context.jobs.map(renderJob);

    var htmlString = htmlSnippets.reduce(function(prev, current){
      return prev + current;
    });

    $('#jobs').append(htmlString);

  };
  renderJobs();

  var renderProject = function(project){
    var source = $('#project-template').html();
    var template = Handlebars.compile(source);
    return template(project);
  };

  var renderProjects = function(){
    var htmlSnippets = context.projects.map(renderProject);

    var htmlString = htmlSnippets.reduce(function(prev, current){
      return prev + current;
    });

    $('#projects').append(htmlString);

  };
  renderProjects();

  handleMainNav();
  context.retrieveJobHistory();
  context.retrieveProjectHistory();
})(window);


(function(context){

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

  // handleMainNav();
  //renderProjects();
  //renderJobs();
  context.retrieveJobHistory(renderJobs);
  context.retrieveProjectHistory(renderProjects);
})(window);

(function(context){
  context.projects = [];

  function Project (opt) {
    this.name = opt.name;
    this.date = opt.pushed_at;
    this.type = opt.language;
    this.githubrepo = opt.html_url;
  }

  context.retrieveProjectHistory = function(){
    $.getJSON('https://api.github.com/users/tetsaiga86/repos', function(data){
      localStorage.projectHistory = JSON.stringify(data);
      var filtered = data.filter(function(project){
        return !project.fork;
      });

      filtered.forEach(function(ele) {
        projects.push(new Project(ele));
      });
    });
  };
})(window);

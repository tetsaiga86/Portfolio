(function(context){
  context.projects = [];

  context.retrieveProjectHistory = function(render){
    repos.requestRepos = function(callback) {
      $.get('/github/users/tetsaiga86/repos' +
      '?per+page=15' +
      '&sort=updated')
      .done(function(data){
        repos.all = data;
      }).done(callback);
    };
  };
})(window);

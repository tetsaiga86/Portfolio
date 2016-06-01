(function(context){
  context.projects = [];

  context.retrieveProjectHistory = function(render){
    $.get('/github/users/codefellows-seattle-301d4/repos' +
    '?per+page=15' +
    '&sort=updated')
    .done(function(data){
      context.projects = data.filter(function(project){
        return !project.fork;
      });
    }).done(render);
  };
    // $.ajax({
    //   url: 'https://api.github.com/users/tetsaiga86/repos',
    //   type: 'GET',
    //   headers: {'Authorization': 'token ' + githubkey},
    //   success: function(data){
    //     localStorage.projectHistory = JSON.stringify(data);
    //     context.projects = data.filter(function(project){
    //       return !project.fork;
    //     });
    //     render();
    //   }
    // });
  // };
})(window);

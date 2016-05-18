var projects = [];

function Project (opt) {
  this.name = opt.name;
  this.date = opt.date;
  this.type = opt.type;
  this.githubrepo = opt.githubrepo;
}

var retrieveProjectHistory = function(){
  $.getJSON('data/projectHistory.json', function(data){
    localStorage.projectHistory = JSON.stringify(data);
    data.forEach(function(ele) {
      projects.push(new Project(ele));
    });
  });
};

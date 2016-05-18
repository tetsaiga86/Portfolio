
var jobs = [];
var projects = [];

function Job (opt) {
  this.company = opt.company;
  this.position = opt.position;
  this.dates = opt.dates;
  this.responsibilities = opt.responsibilities;
}

Job.prototype.toHtml = function() {
  var source = $('#job-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};

function Project (opt) {
  this.title = opt.title;
  this.date = opt.date;
  this.type = opt.type;
  this.description = opt.description;
}

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};
//for future project list
// projectHistory.forEach(function(ele) {
//   projects.push(new Project(ele));
// });
// projects.forEach(function(obj) {
//   $('#projects').append(obj.toHtml());
// });

var callJobs = function(){
  jobs.forEach(function(obj) {
    $('#jobs').append(obj.toHtml());
  });
};

var getJSON = function(){
  $.getJSON('data/jobHistory.json', function(data){
    localStorage.jobHistory = JSON.stringify(data);
    data.forEach(function(ele) {
      jobs.push(new Job(ele));
    });
  });
};

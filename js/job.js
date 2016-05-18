
var jobs = [];

function Job (opt) {
  this.company = opt.company;
  this.position = opt.position;
  this.dates = opt.dates;
  this.responsibilities = opt.responsibilities;
}

function Project (opt) {
  this.title = opt.title;
  this.date = opt.date;
  this.type = opt.type;
  this.description = opt.description;
}

var retrieveJobHistory = function(){
  $.getJSON('data/jobHistory.json', function(data){
    localStorage.jobHistory = JSON.stringify(data);
    data.forEach(function(ele) {
      jobs.push(new Job(ele));
    });
  });
};

//for future project list
// projectHistory.forEach(function(ele) {
//   projects.push(new Project(ele));
// });
// projects.forEach(function(obj) {
//   $('#projects').append(obj.toHtml());
// });


var jobs = [];

function Job (opt) {
  this.company = opt.company;
  this.position = opt.position;
  this.dates = opt.dates;
  this.responsibilities = opt.responsibilities;
}

var retrieveJobHistory = function(){
  $.getJSON('https://raw.githubusercontent.com/tetsaiga86/Portfolio/class-07/data/jobHistory.json', function(data){
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

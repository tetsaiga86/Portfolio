var jobs = [];
var projects = [];

function job (opt) {
  this.company = opt.company;
  this.position = opt.position;
  this.dates = opt.dates;
  this.responsibilities = opt.responsibilities;
}

job.prototype.toHtml = function() {
  var source = $('#job-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};

jobHistory.forEach(function(ele) {
  jobs.push(new job(ele));
});

// click event listeners
handleMainNav = function() {
  $('.icon-home').on('click', function() {
    $('.tab-content').hide();
    $('#about').fadeIn('#about');
  });
  $('.icon-work').on('click', function() {
    $('.tab-content').hide();
    $('#work').fadeIn('#work');
  });
  $('.icon-home').click();
};

function project (opt) {
  this.title = opt.title;
  this.date = opt.date;
  this.type = opt.type;
  this.description = opt.description;
}

project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var template = Handlebars.compile(source);
  return template(this);
};

projectHistory.forEach(function(ele) {
  projects.push(new project(ele));
});

handleMainNav();

jobs.forEach(function(obj) {
  $('#jobs').append(obj.toHtml());
});

projects.forEach(function(obj) {
  $('#projects').append(obj.toHtml());
});

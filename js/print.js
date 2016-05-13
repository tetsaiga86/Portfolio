var jobs = [];

function job (opt) {
  this.company = opt.company;
  this.position = opt.position;
  this.dates = opt.dates;
  this.responsibilities = opt.responsibilities;
}

job.prototype.toHtml = function() {
  var $newjob = $('.template').clone();
  $newjob.find('#name').text(this.company);
  $newjob.find('#dates').text(this.dates);
  $newjob.find('#position').text(this.position);
  $newjob.find('#respons').text(this.responsibilities);
  $newjob.removeClass('template');
  return $newjob;
};

jobHistory.forEach(function(ele) {
  jobPush(new job(ele));
});

// jobs.forEach(function(a){
  // $('#jobs').append(a.toHtml());
// });

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
handleMainNav();

// handlebar js

function jobPush(job){
  var source = $('#job-template').html();
  var template = Handlebars.compile(source);
  var context = {company: job.company, dates: job.dates, position: job.position, respons: job.responsibilities};
  var html = template(context);
  $('#jobs').append(html);
};

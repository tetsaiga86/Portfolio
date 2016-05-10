var jobs = [];

function job (shit) {
  this.company = shit.company;
  this.position = shit.position;
  this.dates = shit.dates;
  this.responsibilities = shit.responsibilities;
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
  jobs.push(new job(ele));
});

jobs.forEach(function(a){
  $('#jobs').append(a.toHtml());
});

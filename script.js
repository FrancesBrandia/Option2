
$('#show-samples').on('click', e => {
  $('#sample-block').addClass('active');
  $('#code-block').removeClass('active');
});

$('#show-code').on('click', e => {
  $('#code-block').addClass('active');
  $('#sample-block').removeClass('active');
});

$.getJSON('../data.json', function (data) {
  console.log(data)
})

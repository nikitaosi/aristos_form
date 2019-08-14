$(window).on('load', function () {
  $('.loader').delay(5000).fadeOut(500);
  setTimeout(function () {
    $('.authArea').fadeIn('slow');
  }, 5000);
});
function checkValidity() {
  $('.waitMessage').show(300);
    setTimeout(function () {
      $('.waitMessage').hide(300);
      givingAccess();
    }, 3000);
};

function isItRight() {
  var form = document.getElementsByClassName("auth");
  var data = form[0].getElementsByTagName("input");
  for (var i = 0; i < data.length; i++) {
    if (data[i].value == 'test') {continue}
    else {return false};
  };
  return true;
};

function givingAccess() {
  if (isItRight()) {
    $('.successMessage').show(300);
    setTimeout(function () {
      $('.successMessage').hide(300);
      $('.authArea').hide(300);
      $('.welcome').show(700);
    }, 3000);
  }
  else {
    $('.errorMessage').show(300);
    $('.errorMessage').delay(3000).hide(300);
  }
}
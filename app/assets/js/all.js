$('.icon-ham').click(function(e) {
  e.preventDefault();
  $('.dropdown').toggleClass('active')
})

const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
  buttonClass: 'btn secondary',
  prevArrow: '<',
  nextArrow: '>'
}); 



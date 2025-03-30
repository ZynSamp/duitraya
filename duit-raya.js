$('.js-open-envelope').on('click', function (event) {
  event.preventDefault();
  var $self = $(this);
  $self.find('.envelope').removeClass('tossing').addClass('open');
  $self.find('.crescent use').attr("xlink:href", "#icon-crescent");
  $self.find('.envelope__card').addClass('open');
  
  // Add a slight delay to match the animation timing
  setTimeout(function() {
    // Move the envelope wrapper down after the card comes out
    $self.css({
      'transform': 'translate(-50%, 50%)'  // Positive value moves it down
    });
  }, 1000); // Timing to match the cardExpand animation
});
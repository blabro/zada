$(document).ready(function() {
  $(document).on('mouseenter', '.great', function () {
console.log('wjezdza');
      $(this).find(":button").show();
  }).on('mouseleave', '.great', function () {
console.log('wyezdza');
      $(this).find(":button").hide();
  });
});

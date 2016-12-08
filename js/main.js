$(document).ready(function() {
  $("li").on('mouseover', '.great', function () {
      $("button[type=kupbutton]").show();
  }).on('mouseleave', '.great', function () {
      $("button[type=kupbutton]").hide();
  });

  var i = 0, sum = 0, suma=0;
  $("button[type=kupbutton]").mousedown(function () {
    i++;
    suma += parseFloat(this.value);
    sum = suma.toFixed(2);
    document.getElementById('koszyk').innerHTML = '(' + i + ')' + sum + ' ZŁ';
    console.log( '(' + i + ')' + sum + ' ZŁ');
  });
});

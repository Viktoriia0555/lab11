jQuery(function () {
 const addNewLayer = (color) => {
  $('#container')
   .append(`<div class="part" style="background-color: ${color}"></div>`);
  $('#container > .part:last-child')
   .on('click', function () {
    $(this).animate(
     { height: "0" },
     {
      duration: 500, // 500ms,
      complete: function () {
       $(this).remove();
      }
     });
   });
 };

 addNewLayer('yellow');
 addNewLayer('#12FA45');

 $('.item').on('click', function () {
  const color = $(this).css('background-color');
  addNewLayer(color);
 });

 $('#color-add').on('click', function () {
  const color = $('#color-value').val();

  // add element on screen
  $('nav')
   .append(`<div class="item" style="background-color: ${color}"></div>`);

  // add function when we click
  $('nav > div:last-child').on('click', function () {
   const color = $('#color-value').val();
   addNewLayer(color);
  });
 });
});
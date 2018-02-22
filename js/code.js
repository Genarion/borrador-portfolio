$(function(){
  let $nodes = $('main > section');
  $nodes.on('click',function(){
    $('.selected > article').css('display','none');
    $('.selected').removeClass('selected').addClass('deselected');

    $(this).find('article').css('display','block');
    $(this).removeClass('deselected').addClass('selected');

  });
});

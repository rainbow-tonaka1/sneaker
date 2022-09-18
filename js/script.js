$(function(){

  $('.humb').click(function(){
    $('.action').toggleClass('open');
  })

$('.bgc').click(function(){
  $('.action').removeClass('open');
})

$('.head-nav a').click(function(){
  $('.action').removeClass('open');
})

  $('.slider').slick({
    centerMode: true,
    centerPadding: "110px",
    // fade: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow:1,
          centerMode:true,
          centerPadding:'50px'
        }
      }
    ]
  });

  $(window).scroll(function(){
    
    $('.feat-img').each(function(){
      let top=$(window).scrollTop();
      let height=$(window).height();
      let cont=$(this).offset().top;
      if( top > cont-height+200 ){
        $(this).css({
          'transform':'translateY(0)',
          'opacity':1
        })
      }

    })
  })

  $('a[href^="#"]').click(function(){
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });

})


// top > cont-height+200
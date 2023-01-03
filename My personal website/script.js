$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        300, 
        'linear'
      );
  
    });
  
  });


  function sendEmail()
  {
      Email.send({
        Host : "smtp.gmail.com",
        Username : "nevillempiananevs@gmail.com",
        Password : "nevslovesjoy",
        To : 'nevillempiana0619@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact from Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
  }
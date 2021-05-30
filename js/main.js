// jquerry file for filtering images.,
$(document).ready(function(){
    let $btns=$(".projects .container .menu-button .text-uppercase");
    $btns.click(function(e){

        $(".projects .container .menu-button .text-uppercase").removeClass('active');
        e.target.classList.add('active');

        let selector=$(e.target).attr('data-filter');
        $(".filter-me").isotope({filter:selector
        });
        return false
    })
    
    $(".projects .container .menu-button #btn").trigger("click")

    // file for popup images

    $('.title .my-img .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
      });
      
      $('.owl-carousel').owlCarousel({
        loop:true,
        // margin:10,
        autoplay:true,
        dots:true,
        // nav:true,
        responsive:{
            0:{
                items:1
            },
            544:{
                items:2
            }
            
        }
    })

})
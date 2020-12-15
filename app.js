var envelope = $( '#envelope' );
var btn_reset = $( '#reset' );

$( envelope ).append( '<div class="checkmark draw"></div>' );
   
    btn_reset.click( function() {
        close();
      $('.checkmark').css( 'display', 'none' );
    });

    function close() {
        envelope.addClass( 'close' )
           .removeClass( 'open' );

           setTimeout(function(){
            $( '#envelope' ).addClass( 'open' ).removeClass( 'close' );
            }, 2100);

    }

    $('#reset').click(function(){
        setTimeout(function(){
        $( envelope ).addClass('is-sent');
        }, 1000);
        setTimeout(function(){
          $( envelope ).removeClass('is-sent'); 
          $('.checkmark').css( 'display', 'block' );
        }, 2000);
      });
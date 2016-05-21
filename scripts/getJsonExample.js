$( function() {

  $('#appendSomething').click( function(){
    console.log( "asdf" );
    $('body').append( "<p>lorem ipsum or something</p>");
  }); // end append click

  $('#getJSON' ).click( function(){
    console.log( 'button clicked' );
    $.getJSON('./test.json', function(data){
       console.log( 'in getJSON' );
       console.log( data );
    }); // end get JSON JQuery call
  }); // end getJSON button click
});

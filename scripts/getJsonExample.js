$( function() {
  $('#getJSON' ).click( function(){
    console.log( 'button clicked' );
    $.getJSON('./test.json', function(data){
       console.log( 'in getJSON' );
       console.log( data );
    }); // end get JSON JQuery call
  }); // end getJSON button click

  $('#getJSONajax' ).click( function(){
    console.log( 'button clicked' );
     $.ajax({
       url: './test.json',
       dataType: 'json',
       success: function( data ){
          console.log( 'in ajax success' );
          console.log( data );
         }, // end success
       statusCode: {
          404: function(){
             alert( 'error connecting to server' );
          } // end 404
         } // end statusCode
       }); // end ajax  object
  }); // end click getJSONAjax button
});
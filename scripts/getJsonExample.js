$( function() {

  $('#appendSomething').click( function(){
    console.log( "in appendSomething" );
    $('body').append( "<p>lorem ipsum or something</p>");
  }); // end append click

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
          var dataString = "<p>Name: " + data.name + "</p>";
          $('body').append( dataString );
         }, // end success
       statusCode: {
          404: function(){
             alert( 'error connecting to server' );
          } // end 404
         } // end statusCode
       }); // end ajax  object
  }); // end click getJSONAjax button

  var callbacker = function(){
    alert();
  };

    $('#getJSONpajax' ).click( function(){
      console.log( 'getJSONpajax clicked' );
      var searchString = 'https://archive.org/advancedsearch.php?q=' + $('#searchField').val() + '&output=json';
       $.ajax({
         url: searchString,
         dataType: "jsonp",
         success: function( data ){
            console.log( 'in ajax jsonp success' );
            console.log( data );
            for( var i=0; i< data.response.docs.length; i++ ){
              var newElement = document.createElement('a');
              newElement.textContent = data.response.docs[i].name;
              newElement.href= "https://archive.org/details/" + data.response.docs[i].identifier;
              $('body').append( newElement );
            }

           }, // end success
         statusCode: {
            404: function(){
               alert( 'error connecting to server' );
            } // end 404
           } // end statusCode
         }); // end ajax  object
    }); // end click getJSONpAjax button

});

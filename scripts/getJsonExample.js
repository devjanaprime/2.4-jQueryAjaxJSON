$( function() {

  $('#appendSomething').click( function(){
    console.log( "in appendSomething" );
    $('body').append( "<p>lorem ipsum or something</p>");
  }); // end append click

  $('#getJSON' ).click( function(){
    console.log( 'button clicked' );
    $.getJSON('./students.json', function(data){
       console.log( 'in getJSON' );
       console.log( data );
    }); // end get JSON JQuery call
  }); // end getJSON button click

  $('#getJSONajax' ).click( function(){
    console.log( 'button clicked' );
     $.ajax({
       url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/gh-pages/students.json',
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

  var callbacker = function(){
    alert();
  };

    $('#getJSONpajax' ).click( function(){
      console.log( 'getJSONpajax clicked' );
      var searchString = 'https://archive.org/advancedsearch.php?q=' + $('#searchField').val() + '&output=json';
      // https://archive.org/advancedsearch.php?q=batman&output=json
       $.ajax({
         url: searchString,
         dataType: "jsonp",
         success: function( data ){
            console.log( 'in ajax jsonp success' );
            console.log( data );
            $('#outputSpace').empty();
            for( var i=0; i< data.response.docs.length; i++ ){
                var newParagraph = document.createElement('p');
                var newLink = document.createElement('a');
                newLink.textContent = data.response.docs[i].title + '(' + data.response.docs[i].mediatype + ')';
                newLink.href= "https://archive.org/details/" + data.response.docs[i].identifier;
                newParagraph.appendChild( newLink );
                $('#outputSpace').appendChild( newParagraph );
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

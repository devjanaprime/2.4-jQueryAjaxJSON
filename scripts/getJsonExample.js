var currentIndex=-1;
var nu;

$( function() {
  $('#getJSONajax' ).click( function(){
     $.ajax({
       url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
       dataType: 'json',
       success: function( data ){
          nu = data;
         }, // end success
       statusCode: {
          404: function(){
             alert( 'error connecting to server' );
          } // end 404
         } // end statusCode
       }); // end ajax  object
  }); // end click getJSONAjax button

  $('#prevButton' ).click( function(){
    currentIndex--;
    // check if index is less than 0, if so go to lat record
    if( currentIndex < 0 ){
      currentIndex = nu.students.length - 1;
    }
    displayStudent();
  }); // end prevButton click

  $('#nextButton' ).click( function(){
    currentIndex++;
    // check if index is greater than or equal to length of array, if so go to first record
    if( currentIndex >= nu.students.length ){
      currentIndex = 0;
    }
    displayStudent();
  }); // end prevButton click

  var displayStudent = function(){
    // empty output before we append new info
    $("#outputDiv").empty();

    // format student info
    var nameOut = nu.students[currentIndex].first_name + " " + nu.students[currentIndex].last_name;
    var infoOut = nu.students[currentIndex].city + ", " + nu.students[currentIndex].shoutout
    // format record number
    var adjustedIndex = currentIndex +1;
    var counterOut = adjustedIndex + "/" + nu.students.length;

    /// - create element append - ///
    // format output
    var newHeader = document.createElement('h2');
    newHeader.textContent=nameOut;
    var newParagraph = document.createElement('p');
    newParagraph.textContent=infoOut;
    var newParagraph1 = document.createElement('p');
    newParagraph1.textContent= counterOut;
    // display output
    $("#outputDiv").append( newHeader );
    $("#outputDiv").append( newParagraph );
    $("#outputDiv").append( newParagraph1 );

    /// - direct text append - ///
    // display student info
    // $("#outputDiv").append( '<h2>' + nameOut + '</h2>' );
    // $("#outputDiv").append( '<p>' + infoOut + '</p>' );
    // // display record number
    // $("#outputDiv").append( '<p>' + counterOut + '</p>' );
  };

});

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    
    var input = $("input").val();
    var mainLink = "https://api.giphy.com/v1/gifs/search?q="+input+"&rating=pg&api_key=dc6zaTOxFJmzC";
     $.ajax({
        url: mainLink,
        method: "GET",
        success: function(response) {
            // YOUR CODE GOES HERE
            
            console.log(input);
            $('.display').empty();
            var max = 30;
            var random = Math.floor(Math.random() * Math.floor(max));
            $('.display').append("<img class='img' src="+response.data[random].images.original.url+">");
            
                                    $('.text-center').empty();

        },
        
    }); 
  
  
});

$("#display-button").click(function(){
    var input = $("input").val();
    var mainLink = "https://api.giphy.com/v1/gifs/search?q="+input+"&rating=pg&api_key=dc6zaTOxFJmzC";
     $.ajax({
        url: mainLink,
        method: "GET",
        success: function(response) {
            // YOUR CODE GOES HERE
            
            console.log(input);
            response.data.forEach(function(element) {
            console.log(element);
            $('.display').append("<img class='img' src="+element.images.original.url+">");
            });
            
                                    $('.text-center').empty();

        },
    }); 
  
                        
});



    function calculateSquare() {
      
      var numberInput = document.getElementById("number");
      var number = parseInt(numberInput.value);

      
      var square = number * number;

      var resultElement = document.getElementById("result");
      resultElement.textContent =  square;
      }
   
   
        function calculateSquareRoot() {
          
          var input = document.getElementById("numberInput").value;
    
        
          var number = parseFloat(input);
    
          
          if (!isNaN(number)) {
           
            var squareRoot = Math.sqrt(number);
    
          
            document.getElementById("res").innerHTML = squareRoot;
          } else {
            
            document.getElementById("res").innerHTML = "0";
          }
       }
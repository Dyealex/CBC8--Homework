// clicking either button adds both the big and small salads but then it will add the quantity of each seperately...WTF????


function getValue() {
   
    var x = document.getElementById('foo').value;//number of big salads

    var z = document.getElementById('big-salad').value;//big salad $10

    var p = document.getElementById('poo').value;//number of small salads

    var s = document.getElementById('small-salad').value;//small salad $9
          
    var y = document.getElementById('boo');//this is where the total goes.
   
    y.innerHTML='$' + (x * z) + (p * s); 

    }
      

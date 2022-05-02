
// var interst_rate = document.getElementById("int_rate");

    function compute()
    {
        p = document.getElementById("principal").value;
        rate = document.getElementById("rate").value;
        year = document.getElementById("years").value;
        result = document.getElementById("result");

        var P = p * (1+(rate/100) * year);
        var A = P;
        var RESULT = A -p;
        result.innerHTML = `is you deposit ${p} <br>at 
                an interest of ${rate}. <br> 
                 You will receive an amount of ${RESULT}`;

                
    }


    function noYear(value){
            document.getElementById("int_rate").innerHTML = value+"%";
        
    }




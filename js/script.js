function convert() {
    try{
        var startingValue = document.getElementById('startingValue').value
        if(document.getElementById('hex').checked) {
            document.getElementById("result").innerHTML = dec2hex(startingValue);
            document.getElementById('result').style.visibility = 'visible'
        }
        else if(document.getElementById('octal').checked) {
            document.getElementById("result").innerHTML = String(dec2oct(startingValue));
            document.getElementById('result').style.visibility = 'visible'
        }
        //default binary
        else{
            document.getElementById("result").innerHTML = String(dec2bin(startingValue));
            document.getElementById('result').style.visibility = 'visible'
        }

        
        }
    catch (error){
        alert("Someone did an oopsie");
    }

    
  }

function dec2bin(dec){
    return parseInt(dec).toString(2);
}

function dec2hex(dec){
    return parseInt(dec).toString(16).toUpperCase();
}

function dec2oct(dec){
    return parseInt(dec).toString(8);
}
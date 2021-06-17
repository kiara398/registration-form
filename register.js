//Access Form via Element ID


var checkNullField = () => { 
    let fullName = document.getElementById('fullname');
    let date = document.getElementById('date');
    let dropDown = document.getElementById('dropdown');
    let dropDown2 = document.getElementById('dropdown2');
    let nin= document.getElementById('nin');
    let temperature = document.getElementById('temp');
    let pickup = document.getElementById('pickup');
    let dropoff= document.getElementById('destination');
    
    
    let nullField = document.querySelector('.null-field')

    if(fullName.value == "" || fullName.value.length>8){
        fullName.style.border = "2px solid red";
        
    } else{
        fullName.style.border = "2px solid green";
    }

    if  (date.value == ""){
        date.style.border = "2px solid red"; 
    }else{
        date.style.border = "2px solid green"; 
    }

    if(dropDown.value == "select your Gender") {
        dropDown.style.border = "2px solid red";
    }else{
 dropDown.style.border = "2px solid green";
    }

     if(dropDown2.value == "Vaccination status"){
       dropDown2.style.border = "2px solid red";
    } else{
        dropDown2.style.border = "2px solid green";
    }

    if(nin.value == "" || nin.value.length !=14){
        nin.style.border = "2px solid red";
        alert('NIN must be 14 numbers!')
    } else{
        nin.style.border = "2px solid green"; 
    }

    if(temperature.value == "") {
        temperature.style.border = "2px solid red";
    } else{
        temperature.style.border = "2px solid green";
    }

    if(pickup.value == ""){
        pickup.style.border = "2px solid red";
    } else{
        pickup.style.border = "2px solid green";
    }

     if(dropoff.value == ""){
        dropoff.style.border = "2px solid red"; 
    } else{
        dropoff.style.border = "2px solid green"; 
    }
    

    
}
//Access Form via Element ID


var checkNullField = () => { 
    let fullName = document.getElementById('fullname');
    let date = document.getElementById('date');
    let dropDownGender = document.getElementById('dropdown');
    let dropDownVaccine = document.getElementById('dropdown2');
    let nin= document.getElementById('nin');
    let temperature = document.getElementById('temp');
    let pickup = document.getElementById('pickup');
    let dropoff= document.getElementById('destination');
    let errornin = document.getElementById('errorNIN')
    
    let nullField = document.querySelector('.null-field')

    if(fullName.value == "" || fullName.value.length<8){
        fullName.style.border = "2px solid red";
        
    } else{
        fullName.style.border = "2px solid green";
    }

    if  (date.value == ""){
        date.style.border = "2px solid red"; 
    }else{
        date.style.border = "2px solid green"; 
    }

    if(dropDownGender.value == "select your Gender") {
        dropDownGender.style.border = "2px solid red";
    }else{
 dropDownGender.style.border = "2px solid green";
    }

     if(dropDownVaccine.value == "Vaccination status"){
       dropDownVaccine.style.border = "2px solid red";
    } else{
        dropDownVaccine.style.border = "2px solid green";
    }

    if(nin.value == "" || nin.value.length !=14){
        nin.style.border = "2px solid red";
       errornin.innerHTML = 'NIN must have 14 characters'
       errornin.style = 'color:white; font-size:14px;'
    } else{
        nin.style.border = "2px solid green"; 
        errornin.innerHTML = ''
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
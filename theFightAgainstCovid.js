let fullName = document.getElementById('fullname')
let date = document.getElementById('date')
let dropDownGender = document.getElementById('dropdown')
let dropDownVaccine = document.getElementById('dropdown2')
let temperature = document.getElementById('temp')
let pickUp = document.getElementById('pickup')
let dropOff = document.getElementById('destination')

//Access the smaall tags that hold the error string.
let errorName = document.getElementById('errorName')
let errorDate = document.getElementById('errorDate')
let errorGender = document.getElementById('errorGender')
let errorVac = document.getElementById('errorVac')
let errorTemp = document.getElementById('errorTemp')
let errorPickUp = document.getElementById('errorPick')
let errorDrop = document.getElementById('errorDrop')

//A regular expression for the tempreture
let tempVal = /^[0-9]*C+$/

//This event listener is set to validate the first name entry.
//checkNameField is the function with the validation condition.
fullName.addEventListener('input', checkNameField = () => {

    if (fullName.value == "" || fullName.value.length > 8) {
        fullName.style.border = "2px solid red";
        errorName.innerHTML = 'Your first name should be less than 8 characters.'
        errorName.style = 'color:white; font-size:14px;'
    } else {
        fullName.style.border = "2px solid green";
        errorName.innerHTML = ''
    }
})
//fullName.removeEventListener('close', checkNullField)

//This event listener is set to validate the Date entry.
//checkDateField is the function with the validation condition.
date.addEventListener('input', checkDateField = () => {
    if (date.value == "") {
        date.style.border = "2px solid red";
        errorDate.innerHTML = "Select today's date"
        errorDate.style = 'color:white; font-size:14px;'
    } else {
        date.style.border = "2px solid green";
        errorDate.innerHTML = ''
    }
})

//This event listener is set to validate the "Select gender" select tag.
//checkGenderField is the function with the validation condition.
/*Equating the dropDownGender value to "Select your Gender" is the condition that
ensures the customer selects anything but the default selection/description.*/
dropDownGender.addEventListener('click', checkGenderField = () => {
    if (dropDownGender.value == "select your Gender") {
        dropDownGender.style.border = "2px solid red";
        errorGender.innerHTML = "Select your gender"
        errorGender.style = 'color:white; font-size:14px;'
    } else {
        dropDownGender.style.border = "2px solid green";
        errorGender.innerHTML = ''
    }
})

//This event listener is set to validate the "Select vaccination status" select tag.
//checkGVacField is the function with the validation condition.
/*Equating the dropDownGender value to "Vaccination status" is the condition that
ensures the customer selects anything but the default selection/description.*/
dropDownVaccine.addEventListener('click', checkVacField = () => {
    if (dropDownVaccine.value == "Vaccination status") {
        dropDownVaccine.style.border = "2px solid red";
        errorVac.innerHTML = "Select your vaccination status."
        errorVac.style = 'color:white; font-size:14px;' 
    } else {
        dropDownVaccine.style.border = "2px solid green";
        errorVac.innerHTML = ''
    }
})

//This event listener is set to validate the "Select vaccination status" select tag.
//checkGVacField is the function with the validation condition.
temperature.addEventListener('input', checkTempField = () => {
    if (temperature.value == "") {
        temperature.style.border = "2px solid red";
        errorTemp.innerHTML = "Input the temperature in the format xxC"
        errorTemp.style = 'color:white; font-size:14px;'
    } else{
        temperature.style.border = "2px solid green";
        errorTemp.innerHTML=''
}})

pickUp.addEventListener('input', checkPickupField = () => {
    if(pickUp.value == ''){
        pickUp.style.border = "2px solid red";
        errorPickUp.innerHTML = "Input your pick up location."
        errorPickUp.style = 'color:white; font-size:14px;'
    }else{
        pickUp.style.border = "2px solid green";
        errorPickUp.innerHTML = ''
    }
})

dropOff.addEventListener('input', checkDropField = () => {
    if(dropOff.value == "") {
        dropOff.style.border = "2px solid red";
        errorDrop.innerHTML = "Input your drop off location"
        errorDrop.style = 'color:white; font-size:14px;'
    }else{
        dropOff.style.border = "2px solid green";
        errorDrop.innerHTML = ''
    }
})

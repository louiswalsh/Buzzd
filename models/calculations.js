function calculateBAC() {
    "use strict";
    var gender = document.getElementById("gender").value;
    var genderConst;
    console.log(gender);
    if (gender === "female") {
        genderConst = 0.55;
    } else if (gender === "male") {
        genderConst = 0.68;
    } else {
        genderConst = 0.62;
    }

    var weight = document.getElementById("weight").value * 454;
    var gramsOfAlcohol = document.getElementById("drink_count").value * 14;
    var bac = (gramsOfAlcohol / (weight * genderConst)) * 100;
    bac = bac - (document.getElementById("time_elapsed").value * 0.015);
    window.alert("Your BAC is: " + bac);
}

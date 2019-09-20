/* 
 * Janhvi Sharma
 */
var celsToFahren = function () {
    var cTemp = parseInt(document.getElementById("txtbox").value);
    if (cTemp !== "" && !isNaN(cTemp)) {
        var fTemp = (cTemp * (9 / 5)) + 32;
        document.getElementById("result").innerHTML = fTemp.toFixed(2) + " &deg;F";
    } else {
        alert("Invalid input! Please enter valid input.");
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").focus();
    }
};
var fahrenToCels = function () {
    var fTemp = parseInt(document.getElementById("txtbox").value);
    if (fTemp !== "" && !isNaN(fTemp)) {
        var cTemp = ((fTemp - 32) * (5 / 9));
        document.getElementById("result").innerHTML = cTemp.toFixed(2) + " &deg;C";
    } else {
        alert("Invalid input! Please enter valid input.");
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").focus();
    }
};
var feetToMet = function () {
    var feet = parseInt(document.getElementById("txtbox").value);
    if (feet !== "" && !isNaN(feet)) {
        var met = feet / 3.281;
        document.getElementById("result").innerHTML = met.toFixed(2) + " m";
    } else {
        alert("Invalid input! Please enter valid input.");
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").focus();
    }
};
var metToFeet = function () {
    var met = parseInt(document.getElementById("txtbox").value);
    if (met !== "" && !isNaN(met)) {
        var feet = met * 3.281;
        document.getElementById("result").innerHTML = feet.toFixed(2) + " ft";
    } else {
        alert("Invalid input! Please enter valid input.");
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").focus();
    }
};
var inchToCenti = function () {
    var inch = parseInt(document.getElementById("txtbox").value);
    if (inch !== "" && !isNaN(inch)) {
        var centi = inch * 2.54;
        document.getElementById("result").innerHTML = centi.toFixed(2) + " cm";
    } else {
        alert("Invalid input! Please enter valid input.");
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").focus();
    }
};
var centiToInch = function () {
    var centi = parseInt(document.getElementById("txtbox").value);
    if (centi !== "" && !isNaN(centi)) {
        var inch = centi / 2.54;
        document.getElementById("result").innerHTML = inch.toFixed(2) + " in";
    } else {
        alert("Invalid input! Please enter valid input.");
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").focus();
    }
};
var poundToKgs = function () {
    var pound = parseInt(document.getElementById("txtbox").value);
    if (pound !== "" && !isNaN(pound)) {
        var kgs = pound / 2.205;
        document.getElementById("result").innerHTML = kgs.toFixed(2) + " kg";
    } else {
        alert("Invalid input! Please enter valid input.");
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").focus();
    }
};
var kgsToPound = function () {
    var kgs = parseInt(document.getElementById("txtbox").value);
    if (kgs !== "" && !isNaN(kgs)) {
        var pound = kgs * 2.205;
        document.getElementById("result").innerHTML = pound.toFixed(2) + " lb";
    } else {
        alert("Invalid input! Please enter valid input.");
        document.getElementById("txtbox").value = "";
        document.getElementById("txtbox").focus();
    }
};
var clearTxt = function () {
    document.getElementById("txtbox").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("txtbox").focus();

};

// npm run dev

document.addEventListener("DOMContentLoaded", function () {



    document.getElementById('monthSalary').addEventListener('change', function (eventData) {
        let fedTax = 0.12;

        let stTax = 0.07;

        let output = 0;

        let monthvalue = document.getElementById("monthSalary").value

        fedTax = Math.ceil(monthvalue * fedTax);
        document.getElementById("fedTax").innerHTML = fedTax;

        stTax = Math.ceil(monthvalue * stTax)
        document.getElementById("stateTax").innerHTML = stTax;

        let socSec = Math.ceil(monthvalue * 0.062);
        document.getElementById("socks").innerHTML = socSec;

        let medicare = Math.ceil(monthvalue * 0.0145);
        document.getElementById("meds").innerHTML = medicare;

        let stDis = Math.ceil(monthvalue * 0.01);
        document.getElementById("disable").innerHTML = stDis;

        let retInv = Math.ceil(monthvalue * 0.05);
        document.getElementById("retire").innerHTML = retInv;

        output = (fedTax + stTax + socSec + medicare + stDis + retInv) + 180;

        document.getElementById("money").innerHTML = output;

        console.log(output);
        document.getElementById("")

    });


});
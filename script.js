document.addEventListener("DOMContentLoaded", function () {



    document.getElementById('monthSalary').addEventListener('change', function (eventData) {
        let fedTax = 0.12;

        let stTax = 0.07;

        let output = 0;

        let monthvalue = document.getElementById("monthSalary").value

        fedTax = (monthvalue * fedTax);

        stTax = (monthvalue * stTax)

        let socSec = monthvalue * 0.062;

        let medicare = monthvalue * 0.0145;

        let stDis = monthvalue * 0.01

        let retInv = monthvalue * 0.05;

        output = (fedTax + stTax + socSec + medicare + stDis + retInv) - 180

        console.log(output)
        document.getElementById("")

    });


});
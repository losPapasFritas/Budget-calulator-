// npm run dev
let utils = {}; //create a namespace for our utility functions



//get function to make an HTTP GET request
utils.get = (url) => {

    //start promise object
    return new Promise(function (resolve, reject) {

        //create a new XMLHttpRequest object
        let request = new XMLHttpRequest();

        //initialize the request
        request.open('GET', url);

        request.onload = function () {
            //resolve on success
            if (request.status == 200) { // HTTP: OK
                console.log('Response OK');
                resolve(request.response);
            }
            //reject on error
            else {
                reject(Error(`promise error with ${request.status}`))
            }
        };
        //handle network errors
        request.onerror = function (error) {
            reject(Error(`Network Error with ${url}: ${error}`))
        };
        //send the request
        request.send();
    }); //end Promise Object
}

//getJSON function to get JSON data from the server
utils.getJSON = async function (url) {
    let string = null;
    //get the JSON string from the server
    try {
        string = await utils.get(url);
    }
    catch (error) {
        console.log(error)
    }
    //parse the JSON string and return the data
    let data = JSON.parse(string);
    return data;
}

async function init() {
    //get the root element of the web page
    let root = document.querySelector('#jobs');

    //create a variable to hold the URL of the JSON data source
    let url = 'https://eecu-data-server.vercel.app/data/2024';

    //create a variable to hold the JSON data
    let occupations = null; 
    
    //try to retrieve the JSON data from the server
    try {
        //retrieve the JSON data from the server
        occupations = await utils.getJSON(url);
    }
    //catch any errors and display them in the root element
    catch(error){
        root.style.color = 'red';
        root.textContent = `error: ${error}`;
    }

    //show JSON data on the html page
    root.innerHTML = buildList(occupations);
}

function buildList(jobs) {
    //create an empty string to hold the HTML
    let html = '<option value="0">Custom</option>';

    //loop through the array of job objects retrieved from the JSON data
    for (let job of jobs) {

        //start an HTML section for each job
        /* An alternative way of looping through each item in the data, not as useful for this assignment but something to keep in mind for a story? ... */
        //loop through each entry and create a div for each key:value pair
        // for (let key in job) {
        //     html += `<div><strong>${key}</strong>: ${job[key]}</div > `;
        // }
        html += `<option value=" ${job.salary}"> ${job.occupation}</option>`
        //create a div element for the job title
       
    }

    //return the completed html
    return html;
}

function updateMoney(money){
    let fedTax = 0.12;

    let stTax = 0.07;

    let output = 0;

    console.log(money);

    document.getElementById(`salaryConst`).innerHTML = money

    fedTax = Math.ceil(money * fedTax);
    document.getElementById("fedTax").innerHTML = fedTax;

    stTax = Math.ceil(money * stTax)
    document.getElementById("stateTax").innerHTML = stTax;

    let socSec = Math.ceil(money * 0.062);
    document.getElementById("socks").innerHTML = socSec;

    let medicare = Math.ceil(money * 0.0145);
    document.getElementById("meds").innerHTML = medicare;

    let stDis = Math.ceil(money * 0.01);
    document.getElementById("disable").innerHTML = stDis;

    let retInv = Math.ceil(money * 0.05);
    document.getElementById("retire").innerHTML = retInv;

    output = (fedTax + stTax + socSec + medicare + stDis + retInv) + 180;

    document.getElementById("money").innerHTML = money - output;
}

function updateChart(){
    chart.data.datasets[0].data[0] = parseFloat(document.getElementById(`loans`).value);
    chart.data.datasets[0].data[1] = parseFloat(document.getElementById(`housing`).value);
    chart.data.datasets[0].data[2] = parseFloat(document.getElementById(`utilities`).value);
    chart.data.datasets[0].data[3] = parseFloat(document.getElementById(`transportation`).value);
    chart.data.datasets[0].data[4] = parseFloat(document.getElementById(`food`).value);
    chart.data.datasets[0].data[5] = parseFloat(document.getElementById(`clothing`).value);
    chart.data.datasets[0].data[6] = parseFloat(document.getElementById(`media`).value);
    chart.data.datasets[0].data[7] = parseFloat(document.getElementById(`entertainment`).value);
    chart.data.datasets[0].data[8] = parseFloat(document.getElementById(`savings`).value);
    chart.update();
}

function addRight(){
    let loans = parseFloat(document.getElementById(`loans`).value);
    let housing = parseFloat(document.getElementById(`housing`).value);
    let util = parseFloat(document.getElementById(`utilities`).value);
    let transport = parseFloat(document.getElementById(`transportation`).value);
    let food = parseFloat(document.getElementById(`food`).value);
    let clothes = parseFloat(document.getElementById(`clothing`).value);
    let media = parseFloat(document.getElementById(`media`).value);
    let entertain = parseFloat(document.getElementById(`entertainment`).value);
    let savings = parseFloat(document.getElementById(`savings`).value);
    let total = loans + housing + util + transport + food + clothes + media + entertain + savings;
    document.getElementById(`total`).innerHTML =`$` + total
}

document.addEventListener('DOMContentLoaded', init);
    
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('jobs').addEventListener('change', function (eventData) {
        if(eventData.target.value == 0){
            document.getElementById(`monthSalary`).classList.remove(`hidden`);
            document.getElementById(`salaryConst`).classList.remove(`visible`);
            document.getElementById(`monthSalary`).classList.add(`visible`);
            document.getElementById(`salaryConst`).classList.add(`hidden`);
        } else{
            document.getElementById(`monthSalary`).classList.remove(`visible`);
            document.getElementById(`salaryConst`).classList.remove(`hidden`);
            document.getElementById(`monthSalary`).classList.add(`hidden`);
            document.getElementById(`salaryConst`).classList.add(`visible`);

            updateMoney(eventData.target.value);
        }
    })

    document.getElementById('monthSalary').addEventListener('change', function (eventData) {
        if(document.getElementById("monthSalary").value >= 100000000000){
            window.alert(`Input value is too large`);
        }
        else if(document.getElementById("monthSalary").value < 0){
            window.alert(`Input value is too small`);
        }
        else{
            updateMoney(document.getElementById("monthSalary").value);
        }
    });
    document.getElementById(`loans`).addEventListener(`change`, function (){
        addRight();
    });
    document.getElementById(`housing`).addEventListener(`change`, function (){
        addRight();
    });
    document.getElementById(`utilities`).addEventListener(`change`, function (){
        addRight();
    });
    document.getElementById(`transportation`).addEventListener(`change`, function (){
        addRight();
    });
    document.getElementById(`food`).addEventListener(`change`, function (){
        addRight();
    });
    document.getElementById(`clothing`).addEventListener(`change`, function (){
        addRight();
    });
    document.getElementById(`media`).addEventListener(`change`, function (){
        addRight();
    });
    document.getElementById(`entertainment`).addEventListener(`change`, function (){
        addRight();
    });
    document.getElementById(`savings`).addEventListener(`change`, function (){
        addRight();
    });

});


document.getElementById(`loans`).addEventListener(`change`, function (){
  changeData();
});
document.getElementById(`housing`).addEventListener(`change`, function (){
  changeData();
});
document.getElementById(`utilities`).addEventListener(`change`, function (){
  changeData();
});
document.getElementById(`transportation`).addEventListener(`change`, function (){
  changeData();
});
document.getElementById(`food`).addEventListener(`change`, function (){
  changeData();
});
document.getElementById(`clothing`).addEventListener(`change`, function (){
  changeData();
});
document.getElementById(`media`).addEventListener(`change`, function (){
  changeData();
});
document.getElementById(`entertainment`).addEventListener(`change`, function (){
  changeData();
});
document.getElementById(`savings`).addEventListener(`change`, function (){
  changeData();
});
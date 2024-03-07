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
    let html = '<option value="0">custom</option>';

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
//initialize the web page when the DOM is ready
document.addEventListener('DOMContentLoaded', init);

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('jobs').addEventListener('change', function (eventData) {
        if(eventData.target.value == 0){
            document.getElementById(`inputHolder`).innerHTML = `<input type="number" placeholder="Monthly Salary" id="monthSalary">`
        } else{
            document.getElementById(`inputHolder`).innerHTML = `<p id='monthSalary'>$${eventData.target.value}</p>`
        }
    })

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
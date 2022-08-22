"use strict"

//creates variables for name and allergies to put in;

var userAllergies = [];
var allergiesNotAnalysed = [];
var resultsUser = document.querySelector(".results")
resultsUser.addEventListener('click', results);
var inputAllergies = document.querySelector('#allergies');
inputAllergies.addEventListener('change', (allergy) => {

});

var saveInfo = document.querySelector(".saveData");
saveInfo.addEventListener('click', pushInfo)

var nameUser = document.querySelector('#name');
nameUser.addEventListener('change', (name) => {
    console.log(nameUser.value)
})



var allergiesTest =

    [
        {
            food: "eggs",
            value: 1
        },
        {
            food: "peanuts",
            value: 2
        },
        {
            food: "shellfish",
            value: 4
        },
        {
            food: "strawberries",
            value: 8
        },
        {
            food: "tomatoes",
            value: 16
        },
        {
            food: "chocolate",
            value: 32
        },
        {
            food: "pollen",
            value: 64
        },
        {
            food: "cats",
            value: 128
        }
    ]
    ;

var totalCount = 0;




function pushInfo() {
    userAllergies = inputAllergies.value.split(', ');
    //userAllergies.push(inputAllergies.value);
    console.log(userAllergies);
    looperinho();
}


function looperinho() {


    console.log(userAllergies.length)
    for (var i = 0; i < userAllergies.length; i++) {
        if (userAllergies[i] == "Eggs" || userAllergies[i] == "eggs") {
            totalCount = totalCount + 1;
        }
        else if (userAllergies[i] == 'Peanuts' || userAllergies[i] == 'peanuts') {
            totalCount = totalCount + 2;
        } else if (userAllergies[i] == ('Shellfish') || userAllergies[i] == ('shellfish')) {
            totalCount = totalCount + 4;
        }
        else if (userAllergies[i] == ('Strawberries') || userAllergies[i] == ('strawberries')) {
            totalCount = totalCount + 8;
        }
        else if (userAllergies[i] == ('Tomatoes') || userAllergies[i] == ('tomatoes')) {
            totalCount = totalCount + 16;
        }
        else if (userAllergies[i] == ('Chocolate') || userAllergies[i] == ('chocolate')) {
            totalCount = totalCount + 32;
        }
        else if (userAllergies[i] == ('Pollen') || userAllergies[i] == ('pollen')) {
            totalCount = totalCount + 64;
        }
        else if (userAllergies[i] == ('Cats') || userAllergies[i] == ('cats')) {
            totalCount = totalCount + 128;
        }
        else {
            allergiesNotAnalysed.push(userAllergies[i]);
        }


    }
    console.log(totalCount)
}

function results() {
    alert("Sig. " + nameUser.value + " il suo punteggio e': " + totalCount);
    alert("Non sono state analizzate le allergie per questi tipi di alimenti: " + allergiesNotAnalysed + " ")
}

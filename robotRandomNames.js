
var familyName = document.getElementById('famName');
familyName.addEventListener('change', showConsoleDat);

var familyMembers = document.getElementById('familyMembers');
familyMembers.addEventListener('change', showConsoleDat);

var salary = document.getElementById('salary');
salary.addEventListener('change', showConsoleDat);

var moneyToSpend = document.getElementById('left');
moneyToSpend.addEventListener('change', showConsoleDat)

var button = document.getElementById('revealResults');
button.addEventListener('click', famDetails)



var families = [];

alert("Imposti qui sotto il cognome del capofamiglia, il salario e la quantita' di membri della famiglia!");

function famDetails() {


    //remember that when u create a variabile usable as an object u need to declare it inside the function otherwise u won't be able to use it
    var family = {
        name: familyName.value,
        members: familyMembers.value,
        money: salary.value,
        toSpend: moneyToSpend.value
    };

    console.log(familyName.value)
    families.push(family);
    console.log(families)

}

function showConsoleDat() {
    console.log("Wait")
}


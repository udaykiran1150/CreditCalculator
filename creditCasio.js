let selectedMathsGrade = document.querySelector("#mathsObtained");
let selectedDbmsGrade = document.querySelector("#dbmsObtained");
let selectedDaaGrade = document.querySelector("#daaObtained");
let selectedFlatGrade = document.querySelector("#flatObtained");
let selectedDldGrade = document.querySelector("#dldObtained");

function valueGetter(item) {
    let data;
    switch (item) {
        case "Ex":
            data = 10;
            break;
        case "A":
            data = 9;
            break;
        case "B":
            data = 8;
            break;
        case "C":
            data = 7;
            break;
        case "D":
            data = 6;
            break;
        case "E":
            data = 5;
            break;
        default:
            data = "Select a item";
    }
    return data;
}

let dbms;
let maths;
let daa;
let flat;
let dld;

selectedMathsGrade.addEventListener('change', () => {
    maths = (valueGetter(selectedMathsGrade.value))
});
selectedDbmsGrade.addEventListener('change', () => {
    dbms = (valueGetter(selectedDbmsGrade.value));
});

selectedDaaGrade.addEventListener('change', () => {
    daa = (valueGetter(selectedDaaGrade.value));
});
selectedFlatGrade.addEventListener('change', () => {
    flat = (valueGetter(selectedFlatGrade.value));
});
selectedDldGrade.addEventListener('change', (e) => {
    dld = (valueGetter(selectedDldGrade.value));

});
let mathsGrade = document.querySelector("#mathsCredit").innerHTML;
let dbmsGrade = document.querySelector("#dbmsCredit").innerHTML;
let daaGrade = document.querySelector("#daaCredit").innerHTML;
let dldGrade = document.querySelector("#dldCredit").innerHTML;
let flatGrade = document.querySelector("#flatCredit").innerHTML;
let overall = parseFloat(mathsGrade) + parseFloat(dbmsGrade) + parseFloat(daaGrade) + parseFloat(flatGrade) + parseFloat(dldGrade);

function getResult() {
    let productOverall = parseFloat(mathsGrade) * maths + parseFloat(dbmsGrade) * dbms + parseFloat(daaGrade) * daa + parseFloat(flatGrade) * flat + parseFloat(dldGrade) * dld;
    document.querySelector("#result").innerHTML=productOverall/overall;
    return productOverall;
}

//console.log(document.querySelector("#result").innerHTML);
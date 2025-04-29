const calculateDisplay = document.querySelector('.calculate');
const resultDisplay = document.querySelector('.result');


let currentCalculation = '';
let resultDisplayed = false;


function tapClear(){
    currentCalculation = '';
    calculateDisplay.textContent = '0'; 
    resultDisplay.textContent = '';
    resultDisplayed = false;
}


function tapNum(number){    
    if (resultDisplayed){
        currentCalculation = '';
        resultDisplayed = false;
    }
    
    if (currentCalculation === '0' && number !== '.') {
        currentCalculation = '';
    }
    
    currentCalculation += number;
    calculateDisplay.textContent = currentCalculation;
}

function tapOperator(operator){    
    currentCalculation += operator;
    resultDisplayed = false; 
    calculateDisplay.textContent = currentCalculation;
}


function tapDel() {
    
    if (currentCalculation.length > 0){
        currentCalculation = currentCalculation.slice(0, -1);        
        calculateDisplay.textContent = currentCalculation === '' ? '0' : currentCalculation;
    }
     
     if (currentCalculation === ''){
        calculateDisplay.textContent = '0';
     }
     
     resultDisplayed = false;
}

function tapResult() {
    if (currentCalculation === '' || resultDisplayed){
        return; 
    }

    try {        
        let calculationToEvaluate = currentCalculation.replace(/%/g, '/100');
        
        const result = eval(calculationToEvaluate);

         if (isNaN(result) || !isFinite(result)) {
            resultDisplay.textContent = 'Error';
         } else {
            resultDisplay.textContent = result;
         }
        resultDisplayed = true; 
        } 
    
    catch (error){        
        resultDisplay.textContent = 'Error';
        resultDisplayed = true;
    }
}

tapClear();
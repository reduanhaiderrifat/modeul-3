// *objective : get base  heitght weight to caculator
// 
// *



function calculatorTriangleArea(){
    const triagleBaseInput = document.getElementById('triagle-base');
    const triagleBaseNumber = triagleBaseInput.value;
    const base = parseFloat(triagleBaseNumber);
    console.log(base)

    const triagleHeightInput = document.getElementById('triagle-height');
    const triagleHeightNumber = triagleHeightInput.value;
    const height =parseFloat(triagleHeightNumber);
    console.log( height)
    const area = 0.5 * base * height ;
    console.log(area)

    const triagleArea = document.getElementById('triagle-area');
    triagleArea.innerText = area;
}



function calculatorRectangleArea(){
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const widthNumber = rectangleWidthInput.value;
    const width = parseFloat(widthNumber);
    console.log(width)
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthNumber = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthNumber);
    console.log(length);

    const area = width * length;
    console.log(area);
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}
// function calculatorParallelogramArea(){
//     const rectangleBaseInput = document.getElementById('parallelogram-base');
//     const BaseNumber = rectangleBaseInput.value;
//     const base = parseFloat(BaseNumber);
//     console.log(base)
//     const rectangleHeightInput = document.getElementById('parallelogram-height');
//     const rectangleLengthNumber = rectangleHeightInput.value;
//     const height = parseFloat(rectangleLengthNumber);
//     console.log(height);

//     const area = base * height;
//     console.log(area);
//     const parallelogramArea = document.getElementById('parallelogram-area');
//    parallelogramArea.innerText = area;
// }

function calculatorParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    
    const height = getInputValueById('parallelogram-height')
    
    const area = base * height;
    console.log(area);
    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = area;
  
}

function getInputValueById(input){
    const inputfeild = document.getElementById(input)
  const inputNumber = inputfeild.value;
  const inputValue = parseFloat(inputNumber);
  return inputValue;

}

function getRhombusvalue(input){
    const inputfeild = document.getElementById(input);
    const inputNumber = inputfeild.value;
    const inputValue = parseFloat(inputNumber);
    return inputValue;

}

function caculatorRhombusArea(){
    const d1 = getRhombusvalue('rhombus-d1');
    const d2 = getRhombusvalue('rhombus-d2');
    const area = (d1*d2)/2
    console.log(area);
    const rhombusArea = document.getElementById('rhombus-area');
    rhombusArea.innerText = area;
}
function getPentagonvalue(input){
    const inputfeild = document.getElementById(input);
    const inputNumber = inputfeild.value;
    const inputValue = parseFloat(inputNumber);
    return inputValue;

}
function caculatorPentagonArea(){
    const p = getPentagonvalue('pentagon-p');
    const b = getPentagonvalue('pentagon-b');
    const area = 0.5 * p * b;
    console.log(area);
    const pentagonArea = document.getElementById('pentagon-area');
    pentagonArea.innerText = area;

}
function getEllipsevalue(input){
    const inputfeild = document.getElementById(input);
    const inputNumber = inputfeild.value;
    const inputValue = parseFloat(inputNumber);
    return inputValue;

}
function caculatorEllipseArea(){
    const a = getEllipsevalue('ellipse-a');
    const b = getEllipsevalue('ellipse-b');
    const area = 3.1415 * a * b;
    console.log(area);
    const ellipseArea = document.getElementById('ellipse-area');
    ellipseArea.innerText = area;
}
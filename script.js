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
}

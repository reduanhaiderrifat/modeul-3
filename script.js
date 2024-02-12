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
function calculatorParallelogramArea(){
    const rectangleBaseInput = document.getElementById('parallelogram-base');
    const BaseNumber = rectangleBaseInput.value;
    const base = parseFloat(BaseNumber);
    console.log(base)
    const rectangleHeightInput = document.getElementById('parallelogram-height');
    const rectangleLengthNumber = rectangleHeightInput.value;
    const height = parseFloat(rectangleLengthNumber);
    console.log(height);

    const area = base * height;
    console.log(area);
    const parallelogramArea = document.getElementById('parallelogram-area');
   parallelogramArea.innerText = area;
}

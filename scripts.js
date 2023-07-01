const lengthValue = document.getElementById('length');
const widthValue = document.getElementById('width');
const heightValue = document.getElementById('height');
const pkgs = document.getElementById('pkgs');
const actualWeightValue = document.getElementById('actualWeight');
const chargableWeightValue = document.getElementById('chargableWeight');
const totalValue = document.getElementById('total');
const selectState = document.getElementById("selectState");
const dhpValue = document.getElementById("dhp");
const invoiceValue = document.getElementById("invValue");
const rovValue = document.getElementById("rov");
const payAmtValue = document.getElementById("payAmt");
const boxWeightValue = document.getElementById("boxWeight");
const podValue = document.getElementById("pod");



let l, b, h, n, st, civ, boxWeight;
let chargableValue = 0;
let actualValue = 0;
let grandTotal = 0;
let DHPAmount = 0;
let ROV = 0;
let payAmt = 0;
let dimWeight = 0;
const pod = 120; // docketCharge

var States = [
    {state: "Telengana", rate: 14.4},
    {state: "Gujrat", rate: 10.5},
    {state: "Haryana", rate: 20},
    {state: "West Bengal", rate: 14},
    {state: "Maharashtra", rate: 12},
    {state: "Karnataka", rate: 14.4},
    {state: "Uttar Pradesh", rate: 7.5},
    {state: "Punjab", rate: 7.51},
    
];

lengthValue.addEventListener('input', calculateValues);
widthValue.addEventListener('input', calculateValues);
heightValue.addEventListener('input', calculateValues);
invoiceValue.addEventListener('input', calculateValues);
boxWeightValue.addEventListener('input', calculateValues);
pkgs.addEventListener('input', calculateValues);
selectState.addEventListener('change', calculateValues);






let opt;
for(i = 0; i<States.length; i++){
    opt = document.createElement("option")
    opt.value = i;
    opt.innerText = States[i].state;
    opt.attributes
    selectState.appendChild(opt);
}

calculateValues();



function calculateValues(){
    l = parseFloat(lengthValue.value);
    b = parseFloat(widthValue.value);
    h = parseFloat(heightValue.value);
    n = parseFloat(pkgs.value);
    civ = parseFloat(invoiceValue.value) // invoice value = civ
    st = parseInt(selectState.value);
    boxWeight = parseFloat(boxWeightValue.value)
    

    dimWeight =  l*b*h*n/1728*6;
    dimWeight = Math.round(dimWeight);

    if(dimWeight>boxWeight) actualValue = dimWeight;
    else actualValue = boxWeight;

    if(actualValue <= 20) chargableValue = 20;
    else chargableValue = actualValue;

    grandTotal= Math.round(chargableValue * States[st].rate);

    DHPAmount = Math.round(0.25*grandTotal);
    ROV = Math.round(0.1/100 * civ);

    if(ROV <= 100) ROV = 100;

    payAmt = grandTotal + DHPAmount + ROV + pod;

    actualWeightValue.innerText = `${actualValue}kgs`;
    chargableWeightValue.innerText = `${chargableValue}kgs`;
    totalValue.innerText = `₹${grandTotal}`;
    dhpValue.innerText = `₹${DHPAmount}`;
    rovValue.innerText = `₹${ROV}`;
    podValue.innerText = `₹${pod}`;
    payAmtValue.innerText = `₹${payAmt}`;

    // document.getElementById("DimensionWeight").innerText = `${dimWeight}`;
}



// function takeshot() {
//     let div =
//         document.getElementById('photo');
//     html2canvas(div).then(
//         function (canvas) {
//             document
//             .getElementById('imgOutput')
//             .appendChild(canvas);
//         })
// }
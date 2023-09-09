
function exportAsPDF(){
    const doc = new window.jspdf.jsPDF({
        unit: "pt",
        orientation: "p",
        lineHeight: 1.3
    });
    doc.addFont("fonts/Roboto-Regular.ttf", "Roboto", "normal");
    doc.addFont("fonts/Roboto-Bold.ttf", "Roboto", "bold");
    doc.addFont("fonts/Candara.ttf", "Candara", "normal");
    doc.addFont("fonts/Candara_Bold.ttf", "Candara", "bold");
    
    
    doc.setFont("Roboto");
    doc.setFont(undefined, "bold");
    doc.setFontSize(28);
    doc.text("Freight Invoice", 20, 50);
    doc.line(10, 58, 585, 58);
    
    var out = `
    Invoice Value: 
    Dimension: 
    No. Of Pkg: 
    Actual Weight: 
    Chargable Weight: 
    State:
    
    Grand Total: 
    DHP: 
    ROV: 
    Docket Charge: 

    Payable Amount: 
    `
    
    doc.setFont("Candara", "bold");
    doc.setFontSize(18);
    doc.text(out, 20, 80);

    out = `
    Rs. ${civ}
    ${l} * ${b} * ${h} (inches)
    ${n}
    ${actualValue}kgs
    ${chargableValue}kgs
    ${States[st].state}

    Rs. ${grandTotal}
    Rs. ${DHPAmount}
    Rs. ${ROV}
    Rs. ${pod}

    Rs. ${payAmt}
    `
    doc.setFont("Candara", "normal");
    doc.setFontSize(18);
    doc.text(out, 260, 80);

    out = `Rupees ${getWord(payAmt)} only.`
    doc.text(out, 20, 450)

    let currentDateAndTime = new Date();
    out = `${currentDateAndTime.getDate()}-${currentDateAndTime.getMonth()}-${currentDateAndTime.getFullYear()} | ${currentDateAndTime.getHours()}:${currentDateAndTime.getMinutes()}:${currentDateAndTime.getSeconds()}`;
    doc.setFont("Roboto", "normal");
    doc.setFontSize(14);
    doc.line(10, 490, 585, 490);
    doc.text(out, 20, 507);
    doc.save("export.pdf");
}

const exportBtn = document.getElementById("genPDFbtn");
exportBtn.addEventListener('click', exportAsPDF);
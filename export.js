
function exportAsPDF(){
    const doc = new window.jspdf.jsPDF({
        unit: "pt",
        orientation: "p",
        lineHeight: 1.3
    });
    doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
    doc.addFont("Roboto-Bold.ttf", "Roboto", "bold");
    doc.addFont("Candara.ttf", "Candara", "normal");
    doc.addFont("Candara_Bold.ttf", "Candara", "bold");
    
    
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

    


    doc.save("export.pdf");
}

const exportBtn = document.getElementById("genPDFbtn");
exportBtn.addEventListener('click', exportAsPDF);
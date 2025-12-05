const input = document.getElementById("qrInput");
const btn = document.getElementById("generateBtn");
const box = document.getElementById("qrBox");

btn.addEventListener("click", () => {
    let value = input.value.trim();

    if (value === "") {
        alert("Please enter something!");
        return;
    }

    
    box.innerHTML = "";

    
    new QRCode(box, {
        text: value,
        width: 200,
        height: 200,
        colorDark: "#09bbf2ff",
        colorLight: "#000c1002",
    });

     box.classList.remove("show");
    setTimeout(() => {
        box.classList.add("show");
    }, 100);

document.getElementById("downloadBtn").addEventListener("click", () => {
    const qrImg = document.querySelector("#qrBox img");
    const qrCanvas = document.querySelector("#qrBox canvas");

    let downloadLink = document.createElement("a");
    downloadLink.download = "qrcode.png";

    if (qrImg) {
        
        downloadLink.href = qrImg.src;
    } 
    else if (qrCanvas) {
        downloadLink.href = qrCanvas.toDataURL("image/png");
    }
    
    downloadLink.click();
});



    input.value = "";
});

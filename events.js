
/**Btn */
let btn = document.getElementById("trigBtn");

/** Status */
let status = true; 

/**** Event-Listener ****/

window.addEventListener("load",toggleStatus);


// Klick auf Btn --> Zustand umschlaten
btn.addEventListener("click",toggleStatus);

function toggleStatus() {
    status = !status;
    //ausgabe(status);
    updateView();
}
/**** Änderungen in der View-Schicht ****/
function updateView() {
    
    if (status) {
        // night-mode
        switchClassName("night");
        switchBtnTxt("day");
    } else {
        // day-mode 
        switchClassName("day");
        switchBtnTxt("night");
    }
}
// Modul: Umschaltung Klasse | Test:
//switchClassName("day");
//switchClassName("night");
function switchClassName(modeStr) {
    document.body.className = modeStr;
    document.body.children[0].className  = modeStr;
    document.body.children[1].className = modeStr;
}


// Modul: Umschaltung button text | Test:
//switchBtnTxt("day");
//switchBtnTxt("night");
function switchBtnTxt(modeStr) {
    btn.innerHTML = modeStr
}

/* Tools */
function ausgabe(outputStr) {
    console.log(outputStr);
}

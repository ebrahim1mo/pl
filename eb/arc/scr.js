console.log("sr")














function submitForm() {
    var term1 = document.getElementById("term1").checked;
    var term2 = document.getElementById("term2").checked;

    if (term1 && term2 ) {
        document.getElementById("termsContainer").style.display = "none";
        document.getElementById("ssItem").style.display = "block"; // Show the 'ss' element
    } else {
        alert("الرجاء تحديد جميع الشروط");
    }
}
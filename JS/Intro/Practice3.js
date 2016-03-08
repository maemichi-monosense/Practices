function copy_to_disp() {
    // console.log("> Copy&Paste!");
    // console.log("Before: " + document.getElementById("disp").textContent);
    var userin = document.getElementById("userin").value;
    // console.log("Overwritten by: " + userin);
    document.getElementById("disp").textContent = userin;
    // console.log("After: " + document.getElementById("disp").textContent);
}
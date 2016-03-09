function copy_to_disp() {
    // console.log("> Copy&Paste!");
    // console.log("Before: " + $("#disp").text());
    var userin = $("#userin").val();
    // console.log("Overwritten by: " + userin);
    $("#disp").text(userin);
    // console.log("After: " + $("#disp").text());
}
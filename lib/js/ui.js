$(document).ready(function () {
    // Toggle between RTL and LTR
    $("#toggleDirectionBtn").click(function () {
        isRTL = !isRTL;  // Toggle the RTL flag
        loadFlipbook(currentPdf, isRTL);
        $(this).text(isRTL ? "Switch to LTR" : "Switch to RTL");
    });
});

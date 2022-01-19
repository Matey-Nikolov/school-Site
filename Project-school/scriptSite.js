document.addEventListener("DOMContentLoaded", function() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function(element) {
        return new bootstrap.Popover(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("myBtn");
    var element = document.getElementById("myToast");

    // Create toast instance
    var bsToast = new bootstrap.Toast(element);

    // Show toast on page load
    bsToast.show();
});
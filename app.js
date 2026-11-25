
// Reusable Toast Notification Function
function showToast(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}


// Smooth Scrolling Function
function scrollToBooking() {
    const bookingSection = document.getElementById("booking");

    if (bookingSection) {
        bookingSection.scrollIntoView({
            behavior: "smooth"
        });

        showToast("Redirecting to ticket booking!");
    }
}


// Book Button Click Event
document.addEventListener("DOMContentLoaded", function () {

    const bookButtons = document.querySelectorAll(".book-btn");

    bookButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            scrollToBooking();
        });
    });

});

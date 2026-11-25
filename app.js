
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



// Hamburger Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });
}

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Filter Match Cards by Team
function filterTeam() {
    const selectedTeam = document.getElementById("teamFilter").value;
    const matchCards = document.querySelectorAll(".match-card");

    matchCards.forEach(card => {
        const teams = card.dataset.teams;

        if (selectedTeam === "all" || teams.includes(selectedTeam)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


function setMatchView(view) {
    const matchGrid = document.querySelector(".match-grid");

    if (view === "list") {
        matchGrid.classList.add("list-view");
    } else {
        matchGrid.classList.remove("list-view");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let notice = document.querySelector(".privacynotice");
    let privacyButton = document.querySelector(".nav a:nth-child(3)");

    // Function to check if the section is in the viewport
    function checkVisibility() {
        let position = notice.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            notice.classList.add("show");
        }
    }

    // Click event to reveal and scroll smoothly
    privacyButton.addEventListener("click", function (event) {
        event.preventDefault();
        
        // Make it visible
        notice.style.display = "block";

        // Allow transition to work
        setTimeout(() => {
            notice.classList.add("show");
        }, 50);

        // Smooth scroll to the section
        notice.scrollIntoView({ behavior: "smooth" });
    });

    // Scroll event listener
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run once on page load
});

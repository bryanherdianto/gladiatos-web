document.addEventListener("DOMContentLoaded", function () {
    var menu = document.getElementById("dropdown-menu");
    var menuButton = document.getElementById("menu-button");
    var exitButton = document.getElementById("exit-button");
    var menuLinks = document.querySelectorAll("#dropdown-menu a");

    if (menuButton && exitButton && menu && menuLinks) {
        menuButton.addEventListener("click", function () {
            menu.classList.remove("hidden");
        });

        exitButton.addEventListener("click", function () {
            menu.classList.add("hidden");
        });

        menuLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                menu.classList.add("hidden");
            });
        });
    } else {
        console.error("Menu button or exit button not found!");
    }
});

function rotateImage(clickedElement) {
    const polygon230 = clickedElement.querySelector(".polygon230");
    const isRotated = polygon230.classList.contains("rotate-90");

    // ✅ Get the CURRENT height from Tailwind's responsive classes
    const initialHeight = parseFloat(window.getComputedStyle(clickedElement).height);

    // Set up ResizeObserver to handle screen resizing
    if (!clickedElement.resizeObserver) {
        clickedElement.resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                const currentElement = entry.target;
                // Update height only when NOT rotated
                if (!currentElement.querySelector(".polygon230").classList.contains("rotate-90")) {
                    currentElement.style.height = ''; // Clear inline height to let Tailwind take over
                }
            }
        });
        clickedElement.resizeObserver.observe(clickedElement);
    }

    // Toggle rotation and height
    if (isRotated) {
        polygon230.classList.remove("rotate-90");
        clickedElement.style.height = ''; // Reset to Tailwind's responsive height
    } else {
        polygon230.classList.add("rotate-90");
        clickedElement.style.height = `${initialHeight * 2.5}px`; // Scale to 2.5x
    }
}

function toggleImage(clickedElement) {
    // Remove the 'isactive' and 'svg-red' classes from all images
    document.querySelectorAll('.cursor-pointer').forEach(item => {
        item.classList.remove('isactive');
        const z0Image = item.querySelector('.z-0'); // Find the z-0 image
        if (z0Image) z0Image.classList.remove('svg-red');
    });

    // Add the 'isactive' class to the clicked container
    clickedElement.classList.add('isactive');

    // Add the 'svg-red' class to the z-0 image inside the clicked container
    const z0Image = clickedElement.querySelector('.z-0'); // Find the z-0 image
    if (z0Image) z0Image.classList.add('svg-red');
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach(element => {
    observer.observe(element);
});

let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");
const dropdownMenu = document.getElementById("dropdown-menu");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        navbar.style.transform = "translateY(-100%)";
        dropdownMenu.style.transform = "translateY(-300%)";
    } else {
        navbar.style.transform = "translateY(0)";
        dropdownMenu.style.transform = "translateY(0)";
    }
    lastScrollY = window.scrollY;
});

const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const shortText = document.getElementById('short-text')
    const toggleButton = document.getElementById('toggle-read')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    const toggleTextBlock = () => {
        shortText.classList.toggle('hidden')
        // toggleButton.classList.toggle("visible");
        toggleButton.textContent = shortText.classList.contains("hidden") ? "Read More" : "Read Less";
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)

    toggleButton.addEventListener('click', toggleTextBlock)
}

document.addEventListener('DOMContentLoaded', initApp)
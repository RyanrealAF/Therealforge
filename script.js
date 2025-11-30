// script.js

// Expert Web Developer: Function to handle collapsible module logic.
function setupCollapsibleModules() {
    // Select all buttons used to toggle sections
    const toggles = document.querySelectorAll('.collapsible-toggle');

    // Iterate over each toggle button found
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            // Get the current state of the button (true/false string)
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

            // Toggle the aria-expanded attribute
            toggle.setAttribute('aria-expanded', !isExpanded);

            // Get the ID of the content panel to show/hide
            const contentId = toggle.getAttribute('aria-controls');
            const contentPanel = document.getElementById(contentId);

            if (contentPanel) {
                // Use a dedicated class to trigger visual changes (like max-height or visibility) 
                // This will be defined in style.css.
                contentPanel.classList.toggle('is-open'); 
            }
        });
    });
}

// Run the setup function once the document is fully loaded
document.addEventListener('DOMContentLoaded', setupCollapsibleModules);

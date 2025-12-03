// script.js
// Expert Web Developer: Handles the logic for collapsible sections, prioritizing accessibility.

function setupCollapsibleModules() {
    // Select all buttons used to toggle sections
    const toggles = document.querySelectorAll('.collapsible-toggle');

    // Iterate over each toggle button found
    toggles.forEach(toggle => {
        // Safety Checker: Attach event listener to handle click
        toggle.addEventListener('click', () => {
            // Determine current state
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            
            // 1. Toggle the accessibility attribute (Crucial for screen readers)
            toggle.setAttribute('aria-expanded', !isExpanded);

            // 2. Find the content panel using aria-controls ID
            const contentId = toggle.getAttribute('aria-controls');
            const contentPanel = document.getElementById(contentId);

            if (contentPanel) {
                // 3. Toggle the 'is-open' class to trigger CSS transition
                // This manages the height transition and padding/border visual cues
                contentPanel.classList.toggle('is-open'); 
            }
        });
    });
}

// Ensure the script runs only after the entire document structure is loaded.
document.addEventListener('DOMContentLoaded', setupCollapsibleModules);

// Expert Web Developer Note: Focus on readability and minimal DOM manipulation.

document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons designated as toggles
    const toggles = document.querySelectorAll('.collapsible-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            // Get the ID of the content panel to control from the ARIA attribute
            const contentId = toggle.getAttribute('aria-controls');
            const content = document.getElementById(contentId);

            if (!content) return; // Safety check

            // Check current state (true if expanded, false if collapsed)
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

            // Toggle the ARIA state
            toggle.setAttribute('aria-expanded', String(!isExpanded));
            
            // Toggle the CSS class that controls the max-height transition
            // This is the functional mandate for the collapsible module behavior.
            content.classList.toggle('expanded');
        });
    });
});
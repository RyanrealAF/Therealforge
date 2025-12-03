// Expert Web Developer: Simple, vanilla JS for clean structure and no frameworks.

document.addEventListener('DOMContentLoaded', () => {
    // Select all collapsible-toggle buttons
    const toggles = document.querySelectorAll('.collapsible-toggle');

    toggles.forEach(toggle => {
        // Get the ID of the content panel from the 'aria-controls' attribute
        const contentId = toggle.getAttribute('aria-controls');
        const content = document.getElementById(contentId);

        // Safety Checker / Accessibility: Ensure the button has a role and the initial state is closed
        if (content) {
            toggle.setAttribute('aria-expanded', 'false'); 
        }

        // Add the click handler
        toggle.addEventListener('click', () => {
            if (!content) return; // Exit if no content is linked

            // Check current state
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

            if (isExpanded) {
                // Collapse the section (smooth transition)
                toggle.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = '0';
                content.style.paddingTop = '0';
                content.style.paddingBottom = '0';
            } else {
                // Expand the section (smooth transition)
                toggle.setAttribute('aria-expanded', 'true');
                
                // Use a timeout to ensure the browser calculates scrollHeight correctly
                setTimeout(() => {
                    // Set maxHeight to the calculated scrollHeight to trigger the CSS transition
                    content.style.maxHeight = content.scrollHeight + 'px';
                    // Add vertical padding for the open state
                    content.style.paddingTop = '1.5rem';
                    content.style.paddingBottom = '1rem';
                }, 10);
            }
        });
    });
});

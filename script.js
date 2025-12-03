// Expert Web Developer: Simple, vanilla JS for clean structure and no frameworks.

document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'collapsible-toggle'
    const toggles = document.querySelectorAll('.collapsible-toggle');

    toggles.forEach(toggle => {
        // Find the corresponding content area using the 'aria-controls' attribute
        const contentId = toggle.getAttribute('aria-controls');
        const content = document.getElementById(contentId);

        // Safety Checker / Accessibility: Ensure initial state is closed
        if (content) {
            // Set initial state for accessibility (defaulted to false in HTML)
            // content.style.maxHeight = '0'; // MaxHeight is set via CSS transition
            toggle.setAttribute('aria-expanded', 'false'); 
        }

        // Add click event listener to each button
        toggle.addEventListener('click', () => {
            if (!content) return; // Exit if content not found

            // Check the current expanded state
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

            if (isExpanded) {
                // Collapse the section
                toggle.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = '0';
                content.style.paddingTop = '0';
                content.style.paddingBottom = '0';
            } else {
                // Expand the section
                toggle.setAttribute('aria-expanded', 'true');
                // Set maxHeight to the scroll height to allow CSS transition
                // A small delay ensures the browser calculates the height correctly
                setTimeout(() => {
                     // Add vertical padding for the content when open
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.style.paddingTop = '1.5rem';
                    content.style.paddingBottom = '1rem';
                }, 10);
               
            }
        });
    });
});

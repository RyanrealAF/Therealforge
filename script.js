// Expert Web Developer Note: Focus on readability and minimal DOM manipulation.

document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons designated as toggles
    const toggles = document.querySelectorAll('.collapsible-toggle');

    toggles.forEach(toggle => {
        // Code Reviewer: Ensure initial state is correctly set if CSS default is collapsed
        const contentId = toggle.getAttribute('aria-controls');
        const content = document.getElementById(contentId);

        if (!content) return; // Safety check

        toggle.addEventListener('click', () => {
            
            // Code Reviewer: Use JSON.parse for cleaner boolean conversion
            // This safely converts the string "true"/"false" from the attribute to a boolean
            const isExpanded = JSON.parse(toggle.getAttribute('aria-expanded'));

            // Toggle the ARIA state: if it was true, set it to false (and vice versa)
            toggle.setAttribute('aria-expanded', String(!isExpanded));
            
            // Toggle the CSS class that controls the max-height transition
            content.classList.toggle('expanded');
        });
    });
});
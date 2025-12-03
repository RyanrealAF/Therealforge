// Expert Web Developer: Simple, vanilla JS for clean structure and no frameworks.

document.addEventListener('DOMContentLoaded', () => {
    // Select all collapsible-toggle buttons
    const toggles = document.querySelectorAll('.collapsible-toggle');
    const transitionDuration = 400; // Matches CSS transition time (0.4s)

    toggles.forEach(toggle => {
        // Get the ID of the content panel from the 'aria-controls' attribute
        const contentId = toggle.getAttribute('aria-controls');
        const content = document.getElementById(contentId);

        // Set initial state for accessibility
        if (content) {
            toggle.setAttribute('aria-expanded', 'false'); 
            // Ensure initial style state matches the CSS for closed content
            content.style.maxHeight = '0'; 
        }

        // Add the click handler
        toggle.addEventListener('click', () => {
            if (!content) return;

            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

            if (isExpanded) {
                // COLLAPSE:
                
                // 1. Reset maxHeight to its *actual* current height before starting transition to '0'.
                // This is crucial if maxHeight was previously set to a large fixed value (e.g., '5000px').
                content.style.maxHeight = content.scrollHeight + 'px';

                // 2. Use a delay to ensure the browser registers the actual height before animating to '0'.
                setTimeout(() => {
                    toggle.setAttribute('aria-expanded', 'false');
                    content.style.maxHeight = '0';
                    content.style.paddingTop = '0';
                    content.style.paddingBottom = '0';
                }, 10);
                
            } else {
                // EXPAND:
                toggle.setAttribute('aria-expanded', 'true');
                
                // 1. Set padding first, so scrollHeight calculation includes the space it will take up.
                content.style.paddingTop = '1.5rem';
                content.style.paddingBottom = '1rem';

                // 2. Set maxHeight to the actual scrollHeight + padding. This starts the transition.
                // The browser transitions from 0 to this calculated height.
                content.style.maxHeight = content.scrollHeight + 'px';
                
                // 3. After the transition is visually complete, set maxHeight to a guaranteed large value.
                // This prevents clipping if the content size or window size changes later.
                setTimeout(() => {
                    content.style.maxHeight = '5000px'; // Arbitrarily large value to act as 'auto'
                }, transitionDuration);
            }
        });
    });
});

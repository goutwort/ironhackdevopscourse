console.log("JS is connected! 🚀");

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // This would prevent the default link click behavior for demonstration
        console.log(`You clicked on ${this.textContent}`);
        // Here, you can add code to handle SPA navigation, load content dynamically, etc.
    });
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    // Get the current theme from the body's data attribute
    const currentTheme = document.body.getAttribute('data-theme');
    // Toggle between 'dark' and undefined (default)
    document.body.setAttribute('data-theme', currentTheme === 'dark' ? '' : 'dark');
});
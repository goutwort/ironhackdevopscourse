console.log("JS is connected! 🚀");

document.getElementById('theme-toggle').addEventListener('click', function() {
    // Get the current theme from the body's data attribute
    const currentTheme = document.body.getAttribute('data-theme');
    // Toggle between 'dark' and undefined (default)
    document.body.setAttribute('data-theme', currentTheme === 'dark' ? '' : 'dark');
});
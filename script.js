function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('toggleButton');

    // Toggle the background color of the entire body and button
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white';    // Set background to white
        button.style.backgroundColor = 'black';  // Set button background to black
        button.style.color = 'white';            // Set button text color to white
        button.textContent = 'Night';            // Change button text to 'Night'
    } else {
        body.style.backgroundColor = 'black';    // Set background to black
        button.style.backgroundColor = 'white';  // Set button background to white
        button.style.color = 'black';            // Set button text color to black
        button.textContent = 'Day';              // Change button text to 'Day'
    }
}


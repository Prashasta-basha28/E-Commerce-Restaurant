// Wait for the DOM to load before executing any code
document.addEventListener("DOMContentLoaded", function () {

    // Get the reservation form
    const reservationForm = document.getElementById('reservation-form');

    // Handle the form submission
    reservationForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Get the form values
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;

        // Simple validation: Ensure all fields are filled out
        if (!name || !date || !time || !guests) {
            alert('Please fill out all fields before submitting!');
            return;
        }

        // After successful validation, display a confirmation message
        alert(`Thank you, ${name}! Your reservation for ${guests} guest(s) on ${date} at ${time} has been confirmed.`);

        // Clear the form fields
        reservationForm.reset();
    });
});